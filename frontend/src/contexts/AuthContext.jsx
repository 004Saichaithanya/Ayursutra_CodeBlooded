// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  getIdToken,
  reload
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() { return useContext(AuthContext); }

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth changes
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // Register: create auth user, update profile, create Firestore doc, send verification email
  async function register({ name, email, password, role = "patient", dosha = "", medicalHistory = "" }) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    // Create a user document in Firestore
    await setDoc(doc(db, "Users", cred.user.uid), {
      uid: cred.user.uid,
      name,
      email,
      role,
      dosha,
      medicalHistory,
      createdAt: serverTimestamp()
    });
    // Send verification email
    await sendEmailVerification(cred.user);
    return cred.user;
  }

  // Login: sign in and check email verification if you want to enforce it
  async function login(email, password) {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    await reload(cred.user); // ensure emailVerified is fresh
    return cred.user;
  }

  async function logout() {
    await signOut(auth);
    setUser(null);
  }

  async function resetPassword(email) {
    await sendPasswordResetEmail(auth, email);
  }

  // Expose
  const value = { user, loading, register, login, logout, resetPassword, getIdToken: () => (user ? user.getIdToken() : null) };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
