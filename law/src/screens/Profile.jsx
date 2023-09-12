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
              <p style={{position:"absolute",top:"309px",left:"70px"}}>Welcome, {user.name}</p>
              <p style={{position:"absolute", top:"345px",left:"70px"}}><i class='fa fa-envelope'></i> : {user.email}</p>
              <p style={{position:"absolute", top:"381px",left:"70px"}}>&#9742; : {user.phoneNumber?user.phoneNumber:"9812347531"}</p>
              <p style={{position:"absolute", top:"417px",left:"70px"}}><i class='fa fa-legal'></i> : {user.expertise}</p>
              {/* <button onClick={() => auth.signOut()} style={{position:"absolute",top:"30px",right:"22px",color:"white",background:"#042699",margin: "auto",
    border: "none",
    height: "40px",
    width: "90px",borderRadius:"5px"
    }}>Logout</button> */}
            </div>
            <div class="wrapper">
              <aside class="aside">
                <h3>Profile Page</h3>
                <br />
                <img
                style={{borderRadius:"100%",height:"150px",width:"150px",}}
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
