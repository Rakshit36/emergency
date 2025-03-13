import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { toast } from 'sonner';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// ✅ Force the popup to open in the same tab only
provider.setCustomParameters({
  prompt: 'select_account'
});

const handleGoogleSignIn = async () => {
  try {
    // ✅ Open the sign-in popup in the same tab (not a new tab)
    const result = await signInWithPopup(auth, provider);

    // ✅ Store user in localStorage
    const user = result.user;
    localStorage.setItem('user', JSON.stringify(user));

    // ✅ Show success message
    toast.success("Signed in successfully!");

    // ✅ Reload the page after login
    window.location.reload();
  } catch (error) {
    console.error("Google Sign-In Error:", error);

    // ✅ Handle Errors
    if (error.code === 'auth/popup-closed-by-user') {
      toast.error("Popup closed by user. Try again.");
    } else {
      toast.error("Failed to sign in. Try again.");
    }
  }
};

export default handleGoogleSignIn;
