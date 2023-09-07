import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Templates from "./screens/Templates";
// import ChatBot from "./screens/ChatBot";
import Home from "./screens/Home";
import Map from "./screens/Map";
import Login from "./screens/login";
import Signup from "./screens/signup"
import Profile from "./screens/Profile";
import SeekAssistance from "./screens/SeekAssistance";
import Meet from "./screens/Meet";
import Footer from "./components/Footer";
import ChatBot from "./screens/ChatBot";

function App() {
  return (
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
        </Routes>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
