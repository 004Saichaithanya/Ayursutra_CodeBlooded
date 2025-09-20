# AYURSUTRA - Panchakarma Patient Management

AYURSUTRA is a web application designed to manage Panchakarma therapies, patient data, and practitioner dashboards. It is built using **React.js** for the frontend and **Firebase** for authentication and database.

---

## **Project Structure**

```

AYURSUTRA/
│
├── backend/                  # (Optional) Your backend API if any
│
├── frontend/
│   ├── node\_modules/         # Node dependencies (ignored in git)
│   ├── public/               # Static files (index.html, images, etc.)
│   ├── src/
│   │   ├── assets/           # Images, icons, fonts
│   │   ├── components/       # Reusable React components
│   │   │   ├── FeedbackForm.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NotificationPopup.jsx
│   │   │   ├── SessionCard.jsx
│   │   ├── contexts/         # React Contexts
│   │   │   └── AuthContext.jsx
│   │   ├── pages/            # React pages/screens
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── PatientDashboard.jsx
│   │   │   ├── PractitionerDashboard.jsx
│   │   ├── App.jsx
│   │   ├── firebase.js       # Firebase configuration
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── .env.example          # Template for Firebase environment variables
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── README.md

````

---

## **Setup Instructions for Collaborators**

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/004Saichaithanya/Ayursutra_CodeBlooded.git
cd Ayursutra_CodeBlooded/frontend
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure Firebase

1. Create your own Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Email/Password Authentication** under Authentication → Sign-in method.
3. Create a Firestore database.
4. Copy your Firebase config (API keys, project ID, etc.) into a `.env` file in the `frontend/` folder:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> Do **not** commit `.env` to GitHub. Use `.env.example` as a template.

### 4️⃣ Run the development server

```bash
npm run dev
```

* Open [http://localhost:5173](http://localhost:5173) in your browser.
* You should see the login/register pages.

---

## **Authentication & Dashboard**

* **AuthContext.jsx** handles authentication using Firebase.
* **PrivateRoute** protects dashboard routes.
* **PatientDashboard.jsx** and **PractitionerDashboard.jsx** display user-specific data.

---

## **Git & Collaboration Guidelines**

* Always **pull latest changes** before working:

```bash
git pull origin main
```

* Push your changes with descriptive commit messages:

```bash
git add .
git commit -m "Add feature XYZ"
git push origin main
```

* Use your own `.env` file for Firebase credentials.

---

## **Notes**

* The project uses **Vite + React + Firebase**.
* `.gitignore` ignores `node_modules/`, `dist/`, and `.env`.
* `.env.example` contains a template for environment variables.

---

## **References**

* [Firebase Auth](https://firebase.google.com/docs/auth)
* [Firestore Database](https://firebase.google.com/docs/firestore)
* [Vite Documentation](https://vitejs.dev/)
* [React Documentation](https://reactjs.org/)
