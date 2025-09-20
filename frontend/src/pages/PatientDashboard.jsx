// src/pages/PatientDashboard.jsx
import { useAuth } from "../contexts/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export default function PatientDashboard() {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) setProfile(docSnap.data());
      }
    };
    fetchProfile();
  }, [user]);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {profile?.name || user?.email} 🎉
      </h1>

      <div className="mb-4">
        <p><strong>Role:</strong> {profile?.role}</p>
        <p><strong>Dosha:</strong> {profile?.dosha || "N/A"}</p>
        <p><strong>Medical History:</strong> {profile?.medicalHistory || "N/A"}</p>
      </div>

      <button
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
