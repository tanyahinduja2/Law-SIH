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
import {AiOutlineSend} from "react-icons/ai"
export default function Chat(props) {
  const { room } = props;
  const [newmsg, setnew] = useState("");
  const [messages, setmessages] = useState([]);
  const messagesRef = collection(db, "msgs");
  const user = useContext(UserContext);
  let prevUser = null; 

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room));

    const unsub = onSnapshot(queryMessages, (snap) => {
      let messages = [];

      snap.forEach((doc) => {
        const messageData = { ...doc.data(), id: doc.id };

        
        if (messageData.user !== prevUser) {
          
          messageData.showName = true;
          prevUser = messageData.user;
        } else {
          
          messageData.showName = false;
        }

        messages.push(messageData);
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

  return (
    <div>
    <div className="fullchat">
      <div>
        {messages.map((message) => (
          <div className="msg"
             key={message.id} style={{ textAlign: user.name === message.user ? "right" : 'left' }}>
              <div className="username">{message.showName &&<span>{message.user}</span>}</div> <div className="messagetxt" style={{ textAlign: user.name === message.user ? "right" : 'left',backgroundColor:user.name==message.user?"#042699":"grey" }}>{message.text}</div>
            
          </div>
        ))}
      </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
        className="inputchat"
          placeholder="Type your message here"
          onChange={(e) => setnew(e.target.value)}
          value={newmsg}
          type="text"
        />
        <button className="btn send"type="submit">Send <AiOutlineSend/></button>
      </form>
    </div>
  );
}
