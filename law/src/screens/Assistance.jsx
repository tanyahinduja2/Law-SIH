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
  const [expertsData, setExpertData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const usersCollectionRef = collection(db, "users");

    getDocs(usersCollectionRef)
      .then((querySnapshot) => {
        const expertDataArray = [];
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          if (userData.expert) {
            expertDataArray.push(userData);
          }
        });
        setExpertData(expertDataArray);
      })
      .catch((error) => {
        console.error("Error fetching documents: ", error);
      });
  }, []);
  console.log(expertsData);
  return (
    <>
      <div className="assistance__container">
        {expertsData.map((expert, i) => (
          <>
            <div className="assistance__card">{expert.name}{expert.id}</div>
          </>
        ))}
      </div>
    </>
  );
}
