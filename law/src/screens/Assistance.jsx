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

export default function Assistance(props) {
  const {handleCHAT} =props
  const [expertsData, setExpertData] = useState([]);
  const colours = ['#0A2647', '#205295', '#144272', '#2C74B3'];
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
            <div className="assistance__card">
              <div className="expert-top" style={{backgroundColor: `${colours[i]}`}}>
                <h2 className="expert-name">{expert.name}</h2>
                <img src={expert.photoURL} className="expert-img"></img>
              </div>
              <div className="expert-bottom">
                <h3 className="expert-expertise" style={{color: `${colours[i]}`}}>{expert.expertise}</h3>
                <p className="expert-mail" style={{color: `${colours[i]}`}}>{expert.email}</p>
                <button onClick={()=>{handleCHAT(expert.email)}} type="submit" className="expert-btn" style={{backgroundColor: `${colours[i]}`}}>
                  <span>Chat</span>
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
