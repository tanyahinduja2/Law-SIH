import React, { useEffect, useState,useContext } from "react";
import "../css/login.css";
import login1 from "../illustrations/login.svg";
import { Auth } from "../firebase/Auth";
import { getAuth, } from "firebase/auth";
import { UserContext } from "../App";

export default function Login() {
  const auth = getAuth();
  const user = useContext(UserContext);
  return (
    <div style={{marginTop:"50px"}} className="login">
      <div>
        <img className="svg" alt="img" style={{marginTop:"-10px"}} src={login1}></img>
      </div>
      {user ? (
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
