import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, } from "react-router-dom";
import Templates from "./screens/Templates";
import Home from "./screens/Home";
import Map from "./screens/Map";
import Login from "./screens/login";
import Signup from "./screens/signup"
import Profile from "./screens/Profile";
import SeekAssistance from "./screens/SeekAssistance";
import Meet from "./screens/Meet";
import Footer from "./components/Footer";
import ChatBot from "./screens/ChatBot";
import  Document from "./screens/Document";
export const UserContext = createContext(null);

function App() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
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

  return (
    <UserContext.Provider value={user}>
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/assist" element={<SeekAssistance />} />
          <Route path="/chatbot" element={<ChatBot/>}/>
          <Route path="/maps" element={<Map/>} />
          <Route path="/joinus" element={<Login />} />
          <Route path="/joinus" element={<Signup />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path='/schedule' element={<Meet/>}/>
          <Route path='/templates/:title/:prompt' element={<Document/>}/>


        </Routes>
      
      </div>
      <Footer />
    </div>
    </UserContext.Provider>
  );
}

export default App;
