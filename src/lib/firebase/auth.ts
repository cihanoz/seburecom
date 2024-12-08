import { auth, db } from '$lib/firebase'; // Import auth and db from firebase.js
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, type User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions

// Define the type for error messages
const errorMessages: { [key: string]: string } = {
    'auth/invalid-credential': 'Invalid email or password',
    'auth/user-not-found': 'User not found',
    'auth/wrong-password': 'Invalid email or password',
    'auth/invalid-email': 'Invalid email',
    'auth/email-already-in-use': 'Email already in use',
    'auth/weak-password': 'Weak password',
    'auth/invalid-password': 'Invalid password',
    'auth/invalid-verification-code': 'Invalid verification code',
    'auth/invalid-verification-id': 'Invalid verification ID',
    'auth/invalid-custom-token': 'Invalid custom token',
    'auth/invalid-phone-number': 'Invalid phone number',
    'auth/missing-verification-code': 'Missing verification code',
    'auth/missing-verification-id': 'Missing verification ID',
    'auth/missing-email': 'Missing email',
    'auth/missing-password': 'Missing password',
    'auth/invalid-user-token': 'Invalid user token',
    'auth/invalid-tenant-id': 'Invalid tenant ID',
    'auth/invalid-continue-uri': 'Invalid continue URI',
    'auth/invalid-credential-id': 'Invalid credential ID',
    'auth/invalid-action-code': 'Invalid action code',
    'auth/invalid-message-payload': 'Invalid message payload',
    'auth/invalid-message-scheme': 'Invalid message scheme',
    'auth/invalid-tenant-operation': 'Invalid tenant operation',
};

export const login = async (email: string, password: string): Promise<void> => {
    try {
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            alert(errorMessages[error.code] || error.message);
            throw error; // Rethrow error for handling in the component
        });
        // Handle successful login
    } catch (error) {
        console.error("Login error:", error);
        throw error; // Rethrow error for handling in the component
    }
};

export const signup = async (email: string, password: string, firstName: string, lastName: string): Promise<void> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password).then((user) => {
            return user;
        }).catch((error) => {
            alert(errorMessages[error.code] || error.message);
            throw error; // Rethrow error for handling in the component
        });

        const user = userCredential.user as User;

        // Create a user document in Firestore
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            uid: user.uid,
            firstName: firstName,
            lastName: lastName,
            // Add any other user data you want to store
        });

        await updateProfile(user, {
            displayName: `${firstName} ${lastName}`,
        });

        // Handle successful signup
    } catch (error) {
        console.error("Signup error:", error);
        throw error; // Rethrow error for handling in the component
    }
}; 

export const isLoggedIn = () => {
    return auth.currentUser !== null;
};

export const getCurrentUser = () => {
    return isLoggedIn() ? auth.currentUser : null;
};

export const getCurrentUserEmail = () => {
    return isLoggedIn() ? auth.currentUser?.email : null;
};

export const logout = async () => {
    await auth.signOut();
};