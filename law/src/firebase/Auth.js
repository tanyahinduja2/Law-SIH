// import React from "react";
// import { auth, provider } from "./firebase-config.js";
// import { signInWithPopup } from "firebase/auth";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();

// export const Auth = ({ setIsAuth }) => {
//   const signInWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       cookies.set("auth-token", result.user.refreshToken);
//       setIsAuth(true);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <div className="auth">
//       <p> Sign In With Google To Continue </p>
//       <button onClick={signInWithGoogle}> Sign In With Google </button>
//     </div>
//   );
// };
import React from "react";
import { auth, provider } from "./firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "./firebase-config.js"; // Import your Firestore instance

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      // Extract user data
      const user = result.user;

      // Create a reference to the Firestore document
      const userDocRef = doc(db, "users", user.uid);

      // Define the user data you want to store
      const userData = {
        id:user.uid,
        displayName: user.displayName,
        email: user.email,
        
        // Add other user properties here
      };

      // Set the user data in Firestore
      await setDoc(userDocRef, userData);

      cookies.set("auth-token", user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      <p> Sign In With Google To Continue </p>
      <button onClick={signInWithGoogle}> Sign In With Google </button>
    </div>
  );
};
