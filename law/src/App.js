import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Templates from "./screens/Templates";
import ChatBot from "./screens/ChatBot";
import Home from "./screens/Home";
import Map from "./screens/Map";
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
