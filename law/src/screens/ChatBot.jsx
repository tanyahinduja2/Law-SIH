import React from "react";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import Chat from "../firebase/Chat";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Assistance from "./Assistance";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const cookies = new Cookies();

function ChatBot() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");
  const navigate = useNavigate();
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
  if (!user) {
    return (
      <>
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
      </>
    );
  }

  return (
    <>
      <div>
        <Assistance />
      </div>

      {!isInChat ? (
        <div className="room">
          <label> Type room name: </label>
          <input onChange={(e) => setRoom(e.target.value)} />
          <button
            onClick={() => {
              setIsInChat(true);
            }}
          >
            Enter Chat
          </button>
        </div>
      ) : (
        <Chat room={room} />
      )}
    </>
  );
}

export default ChatBot;
