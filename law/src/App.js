import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Description } from "./components/Description";
import { Routes, Route } from "react-router-dom";
import Templates from "./screens/Templates";
import ChatBot from "./screens/ChatBot";
function App() {
  return <div className="App">
    <Navbar/>
    <div>
      <Routes>
        <Route path="/" element={
          <div>
            <Hero/>
            <Description/>
          </div>
        }/>
        <Route path="/templates" element={<Templates />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </div>
  </div>;
}

export default App;
