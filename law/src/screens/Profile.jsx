import React, { useState, useEffect,useContext } from "react";
import "../css/profile.css";
import Notes from "../screens/Notes.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Profile = () => {
  const auth = getAuth();
  const user = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <div>
        {user ? (
          <>
            <div>
              <p>Welcome, {user.name}</p>
              <button onClick={() => auth.signOut()}>Sign out</button>
            </div>
            <div class="wrapper">
              <aside class="aside">
                <h3>Profile Page</h3>
                <br />
                <img
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?"
                  }
                  alt=""
                />
              </aside>
              <div class="right">
                <h3>Scheduled Meetings</h3>
              </div>
              <div class="left">
                <Notes></Notes>
              </div>
              <div class="content">
                <h3>Your Documents</h3>
              </div>
            </div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <p>You are not signed in</p>
            <button
              className=""
              style={{
                width: "200px",
                border: "1px solid gray",
                borderRadius: "7px",
                height: "40px",
              }}
              onClick={() => navigate("/joinus")}
            >
              Sign In to continue
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
