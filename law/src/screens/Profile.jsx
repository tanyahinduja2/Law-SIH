import React, { useState, useEffect } from "react";
import "../css/profile.css";
import Notes from "../screens/Notes.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

const Profile = () => {
  const auth = getAuth();
  const db = getFirestore();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", authUser.uid);

        try {
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            setUser(userDocSnapshot.data());
          } else {
            console.error("User data not found in Firestore");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div>
        {user ? (
          <div>
            <p>Welcome, {user.name}</p>
            <button onClick={()=>auth.signOut()} >Sign out</button>
          </div>
        ) : (
          <p>Not signed in</p>
        )}
      </div>
      <div class="wrapper">
        <aside class="aside">
          <h3>Profile Page</h3>
          <br />
          <img
            src={user?.photoURL?user.photoURL:"https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?"}
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
  );
};

export default Profile;
