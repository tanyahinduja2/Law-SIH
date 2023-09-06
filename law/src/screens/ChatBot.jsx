import React from "react";
import { Auth } from "../firebase/Auth";
import { useState, useRef } from "react";
import Cookies from "universal-cookie";
import Chat from "../firebase/Chat";
import {AppWrapper} from "../firebase/AppWrapper";
import Assistance from "./Assistance";
const cookies = new Cookies();

function ChatBot() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");

  if (!isAuth) {
    return (
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
    );
  }

  return (<>
    <div><Assistance/></div>
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      
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
    </AppWrapper>
    </>
    
  );
}

export default ChatBot;