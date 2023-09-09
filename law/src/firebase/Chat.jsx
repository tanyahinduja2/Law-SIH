import React, { useState, useEffect, useContext } from "react";
import {
  addDoc,
  getDoc,
  doc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "./firebase-config";
import { UserContext } from "../App";
import { AiOutlineSend } from "react-icons/ai";
export default function Chat(props) {
  const { room } = props;
  const [newmsg, setnew] = useState("");
  const [messages, setmessages] = useState([]);
  const messagesRef = collection(db, "msgs");
  const user = useContext(UserContext);
  let prevUser = null;
  const [name, setname] = useState("");
  const [otherUsers, setOtherUsers] = useState([]);
  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room));

    const unsub = onSnapshot(queryMessages, (snap) => {
      let messages = [];
      const tempOtherUsers = [];
      snap.forEach((doc) => {
        const messageData = { ...doc.data(), id: doc.id };
      
        if (messageData.user !== prevUser) {
          messageData.showName = true;
          prevUser = messageData.user;
          setname(messageData.user);
        } else {
          messageData.showName = false;
        }

        messages.push(messageData);
        if (messageData.user !== user.name) {
          tempOtherUsers.push(messageData.user);
        }
      });

      messages.sort((a, b) => a.createdAt - b.createdAt);

      setmessages(messages);
      setOtherUsers(tempOtherUsers);
    });
    return () => unsub();
  }, [room]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newmsg === "") return;
    let isExpert = false;
    let photoURL =""

  if (user.expert) {
    const userDocRef = doc(db, "users", user.id);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      isExpert = userData.expert || false;
      photoURL = userData.photoURL || ""; 
    }
  }

    await addDoc(messagesRef, {
      text: newmsg,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
      expert: isExpert,
      photoURL:photoURL,
    });

    setnew("");
  };
  const uniqueOtherUsers = Array.from(new Set(otherUsers));

  return (
    <div>
      <div className="flexy">
        {user.expert ?(<div className="halfchat">
          <div>
            <h5 style={{ margin: "13px", fontWeight: "bold" }}>
              PEOPLE LOOKING FOR HELP
            </h5>
            {user.expert ? (
              <div className="chatname">
                <div className="names">
                  {uniqueOtherUsers.length > 0 && (
                    <div>
                      {uniqueOtherUsers.map((otherUser) => (
                        <div className="namesdiv" key={otherUser}>
                          {otherUser}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>):<></>}

        <div className="fullchat">
          <div>
            {messages.map((message) => (
              <div
                className="msg"
                key={message.id}
                style={{
                  textAlign: user.name === message.user ? "right" : "left",
                }}
              >
                <div className="username">
                  <span> {message.user}
                  {message.expert  ? "(expert)" : ""}</span>
                </div>{" "}
                {user.name!==message.user? <img src={user.photoURL} alt="" style={{height:"30px" ,width:"30px",borderRadius:"50px"}}/>:<></>}
                <div
                  className="messagetxt"
                  style={{
                    textAlign: user.name === message.user ? "right" : "left",
                    backgroundColor:
                      user.name === message.user ? "#042699" : "grey",
                  }}
                >

                  {message.text} 
                </div>
                {user.name==message.user? <img src={user.photoURL} alt="" style={{height:"30px" ,width:"30px",borderRadius:"50px"}}/>:<></>}
               
                
              </div>
            ))}
          </div>
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
        <button className="btn send" type="submit">
          Send <AiOutlineSend />
        </button>
      </form>
    </div>
  );
}
