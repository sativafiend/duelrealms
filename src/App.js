import {Home} from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Whitepaper } from "./pages/Whitepaper";
import {Rules} from "./pages/Rules";
import {Almanac} from "./pages/Almanac";
import {Marketplace} from "./pages/Marketplace";
import {Team} from "./pages/Team";
import {Navbar} from "./components/Navbar";
import { ScrollButton } from "./components/ScrollButton";
import './App.css';
import {Footer} from "./components/Footer";


export default function App() {
  
  document.body.style.backgroundColor = '#000000';
  document.body.style.margin = '0';

  return (
    <div className="duel__app-container">
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Whitepaper" element={<Whitepaper />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Almanac" element={<Almanac />} />
        <Route path="/Marketplace" element={<Marketplace />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </Router>
    {/* <ScrollButton /> */}
    <Footer />
    </div>
  );
}
