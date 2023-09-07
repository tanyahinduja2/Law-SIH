import React, { useState } from "react";
import { auth, provider } from "./firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config.js";
import "../css/auth.css";

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [expertise, setExpertise] = useState("");

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      const userDocRef = doc(db, "users", user.uid);

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
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="auth">
      <div>
        <h2>Sign In</h2>
      </div>
      <h3>Are you a legal consortium?</h3>
      <h5>
        (eg. advocates, arbitrators, mediators, notaries, and document writers)
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
        Sign In With Google{" "}
      </button>
    </div>
  );
};
