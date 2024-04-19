import React, { useState } from "react";
import { auth, provider } from "./firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { doc, setDoc,getDoc } from "firebase/firestore";
import { db } from "./firebase-config.js";
import "../css/auth.css";

const cookies = new Cookies();

export const Auth = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [expertise, setExpertise] = useState("");
  const [signIn, setSignIn] = useState(true);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      const userDocRef = doc(db, "users", user.uid);

      const docSnapshot = await getDoc(userDocRef);

    if (docSnapshot.exists()) {
      alert("User already exists. Please log in.");
      auth.signOut()
      return; 
    }

      const userData = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
        formFilled: true,
        expert: activeTab === 1 ? false : true,
        expertise,
      };

      await setDoc(userDocRef, userData);

      cookies.set("auth-token", user.refreshToken);
    } catch (err) {
      console.error(err);
    }
  };

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      const userDocRef = doc(db, "users", user.uid);
  
      const docSnapshot = await getDoc(userDocRef);
  
      if (!docSnapshot.exists()) {
        alert("User does not exist. Please sign up.");
        await auth.signOut();
        return;
      }
      alert("Login successful!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth" style={{width:"750px",height:"500px"}}>
      <div style={{ display: "flex", }}>
        <h2>Sign Up</h2>
        <h2 style={{color:"gray",padding:"0 10px"}}>/</h2>
        <h2>Log In</h2>
      </div>
      
          <h3>Are you a legal consortium?</h3>
          <h5>
            (eg. advocates, arbitrators, mediators, notaries, and document
            writers)
          </h5>
          {activeTab === 2 && (
            <div>
              <input
                style={{
                  width: "400px",
                  border: "none",
                  backgroundColor: "lightgray",
                  padding: "10px",
                  borderRadius: "5px",
                }}
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
                placeholder="Enter your expertise *"
              />
            </div>
          )}
          <div className="container">
            <div className="tabs">
              <input
                type="radio"
                id="radio-1"
                name="tabs"
                checked={activeTab === 1}
                onChange={() => handleTabChange(1)}
              />
              <label className="tab" htmlFor="radio-1">
                No
              </label>
              <input
                type="radio"
                id="radio-2"
                name="tabs"
                checked={activeTab === 2}
                onChange={() => handleTabChange(2)}
              />
              <label className="tab" htmlFor="radio-2">
                Yes
              </label>
              <span className="glider"></span>
            </div>
          </div>

          <button className="btn auth1" onClick={signInWithGoogle}>
            {" "}
            Sign Up With Google{" "}
          </button>
          <span>or</span>
          <button className="btn auth2" onClick={loginWithGoogle}>
            {" "}
            Log In With Google{" "}
          </button>
    </div>
  );
};