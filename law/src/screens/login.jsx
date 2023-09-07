import React, { useEffect, useState } from "react";
import "../css/login.css";
import login1 from "../illustrations/login.svg";
import { Auth } from "../firebase/Auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const auth = getAuth();
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        console.log("user signed in", authUser);
        setSignedIn(true);
      } else {
        console.log("user noth there");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="login">
      <div>
        <img className="svg" alt="img" src={login1}></img>
      </div>
      {signedIn ? (
        <div>
          <button
            className=""
            style={{
              width: "200px",
              border: "1px solid gray",
              borderRadius: "7px",
              height: "40px",
            }}
            onClick={() => {
              auth.signOut();
              setSignedIn(false)
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
}
