import React , { Component } from 'react';
 import "../css/profile.css";

// import { getAuth, onAuthStateChanged } from "firebase/auth";

const Profile = () => {
    // const auth = getAuth();

// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log("User is signed in:", user);
//     } else {
//       console.log("User is signed out");
//     }
//   });
//   return () => unsubscribe();
// }, []);

  return (
    <div class="wrapper">
    <aside class="aside">Profile Page
    <br />
    <img src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?" alt="" />
    </aside>
    <div class="left">Your Notes
    </div>
    <div class="content">Your Documents</div>
    <div class="right">Scheduled Meetings</div>
 </div>
  )
}

export default Profile