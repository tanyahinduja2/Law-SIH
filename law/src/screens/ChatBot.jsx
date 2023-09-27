import React, { useState, useContext, useEffect } from "react";
import Cookies from "universal-cookie";
import Chat from "../firebase/Chat";
import { useNavigate } from "react-router-dom";
import Assistance from "./Assistance";
import { getAuth } from "firebase/auth";
import { UserContext } from "../App";
const cookies = new Cookies();

function ChatBot() {
  const auth = getAuth();
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [isInChat, setIsInChat] = useState(null);
  const [chattingWith, setChattingWith] = useState(""); // Store the username of the user you are chatting with
  const [room, setRoom] = useState(``);

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
  const handleCHAT=(email) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
    setRoom(email)
    setIsInChat(true);
    setChattingWith("OtherUser"); 
  }
  return (
    <>
      {isInChat ? (
        <div></div>
      ) : (
        <div>
          <Assistance handleCHAT={handleCHAT}/>
        </div>
      )}

      {!isInChat ? (
        <div className="room">
          <label> Type room name: </label>
          <input value={room} onChange={(e) => setRoom(e.target.value)} />
          <button
            onClick={handleCHAT}
          >
            Enter Chat
          </button>
        </div>
      ) : (
        // Render the Chat component with room and chattingWith props
        <Chat room={room} chattingWith={chattingWith} />
      )}
    </>
  );
}

export default ChatBot;
