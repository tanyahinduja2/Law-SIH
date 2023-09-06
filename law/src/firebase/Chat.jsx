import React, { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
import { auth, db } from "./firebase-config";

export default function Chat(props) {
  const { room } = props;
  const [newmsg, setnew] = useState("");
  const [messages, setmessages] = useState([]); // Initialize messages as an empty array
  const messagesRef = collection(db, "msgs"); // Specify the collection name here

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room));
    const unsub = onSnapshot(queryMessages, (snap) => {
      let messages = [];
      snap.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
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

  return (
    <div>
      <div>
        {messages.map((message) => (
          <h5 key={message.id}>{message.text}</h5>
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
