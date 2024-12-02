import { auth, db } from '$lib/firebase'; // Import auth and db from firebase.js
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions

export const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        // Handle successful login
    } catch (error) {
        console.error("Login error:", error);
        throw error; // Rethrow error for handling in the component
    }
};

export const signup = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create a user document in Firestore
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            uid: user.uid,
            // Add any other user data you want to store
        });

        // Handle successful signup
    } catch (error) {
        console.error("Signup error:", error);
        throw error; // Rethrow error for handling in the component
    }
}; 