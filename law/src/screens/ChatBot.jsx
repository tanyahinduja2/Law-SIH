import Reactm,{useContext} from "react";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import Chat from "../firebase/Chat";
import { useNavigate } from "react-router-dom";
import Assistance from "./Assistance";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserContext } from "../App";
const cookies = new Cookies();

function ChatBot() {
  const auth = getAuth();
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");
  
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
    {isInChat?(
      <div></div>
    ):<div>
    <Assistance />
  </div>}
      

      {!isInChat ? (
        <div className="room">
          <label> Type room name: </label>
          <input onChange={(e)=>{setRoom(e.target.value)}} />
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth" // Optional: Adds smooth scrolling animation
              });
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
