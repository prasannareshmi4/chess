import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Login/Login";
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import Gamescreen from "./components/Gamescreen/Gamescreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/gamescreen" element={<Gamescreen />} />
      </Routes>
    </Router>
  );
};

export default App;
