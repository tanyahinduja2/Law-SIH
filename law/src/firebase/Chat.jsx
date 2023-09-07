import React, { useState, useEffect, useContext } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
import { auth, db } from "./firebase-config";
import { UserContext } from "../App";

export default function Chat(props) {
  const { room } = props;
  const [newmsg, setnew] = useState("");
  const [messages, setmessages] = useState([]);
  const messagesRef = collection(db, "msgs");

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room));
    
    const unsub = onSnapshot(queryMessages, (snap) => {
      let messages = [];
      snap.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      
      
      messages.sort((a, b) => a.createdAt - b.createdAt);

      setmessages(messages);
      
    });
    return () => unsub();
  }, [room]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newmsg === "") return;

    await addDoc(messagesRef, {
      text: newmsg,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setnew("");
  };

  const user = useContext(UserContext);

  return (
    <div className="fullchat">
      <div >
        {messages.map((message) => (
          <h5 key={message.id} style={{marginLeft:user.name===message.user ?"70px":"0"}}>
            {message.user}:{message.text}
          </h5>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="type your msg here"
          onChange={(e) => setnew(e.target.value)}
          value={newmsg}
          type="text"
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
}
