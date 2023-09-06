import React , { useState } from 'react';
 import "../css/profile.css";
 import Notes from '../screens/Notes.jsx';
import Box from '../components/Component.jsx';
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
    <aside class="aside"><h3>Profile Page</h3>
    <br />
    <img src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?" alt="" />
    </aside>
    <div class="right"><h3>Scheduled Meetings</h3></div>
    <div class="left">
 
<Notes></Notes>

    </div>
    <div class="content"><h3>Your Documents</h3></div>
    
 </div>
  )
}

export default Profile



