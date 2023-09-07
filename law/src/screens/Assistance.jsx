import React, { useEffect, useState } from "react";
import "../css/chat.css";
import pfp from "../illustrations/pfp.webp";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

export default function Assistance() {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const usersCollectionRef = collection(db, "users");

    getDocs(usersCollectionRef)
      .then((querySnapshot) => {
        const userDataArray = [];
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          if (userData.expert) {
            userDataArray.push(userData);
          }
        });
        setUsersData(userDataArray);
      })
      .catch((error) => {
        console.error("Error fetching documents: ", error);
      });
  }, []);
  console.log(usersData);
  return (
    <>
      <div className="assistance__container">
        {usersData.map((expert, id) => (
          <>
            <div className="assistance__card">{expert.name}{expert.id}</div>
          </>
        ))}
      </div>
    </>
  );
}
