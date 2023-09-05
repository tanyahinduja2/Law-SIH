import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Description } from "./components/Description";
function App() {
  return <div className="App">
    <Navbar/>
    <Hero/>
    <Description/>
  </div>;
}

export default App;
