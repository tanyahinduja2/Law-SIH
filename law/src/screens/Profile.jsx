import React,{useEffect} from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Profile = () => {
    const auth = getAuth();

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in:", user);
    } else {
      console.log("User is signed out");
    }
  });
  return () => unsubscribe();
}, []);

  return (
 <div></div>
  )
}

export default Profile