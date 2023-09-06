import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Templates from "./screens/Templates";
import ChatBot from "./screens/ChatBot";
import Home from "./screens/Home";
import Map from "./screens/Map";
import Login from "./screens/login";
import Signup from "./screens/signup"
import Profile from "./screens/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/maps" element={<Map/>} />
          <Route path="/joinus" element={<Login />} />
          <Route path="/joinus" element={<Signup />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
