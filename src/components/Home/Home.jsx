import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">ChessLing</h2>
        <ul>
          <li className="active">Arena</li>
          <li onClick={() => navigate("/friends")}>Friends</li>
          <li>Results</li>
          <li>Learn</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="home-main">
        <div className="home-header">
          <h1>Start Playing</h1>
        </div>

        <div className="cards-row">
          <div className="card">
            <h3>TSM Duels</h3>
            <p>Score Highest Points</p>
            <span>469 Playing</span>
          </div>

          <div className="card">
            <h3>Gobble Chess</h3>
            <p>29th Sept, 2025</p>
            <span>469 Playing</span>
          </div>
        </div>

        <div className="cards-row">
          <div className="card">
            <h3>All Gobble Puzzles</h3>
            <p>Unlock all puzzles</p>
          </div>

          <div className="card">
            <h3>6 Moves Challenge</h3>
            <button onClick={() => navigate("/friends")}>Challenge Friends</button>
          </div>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="right-panel">
        <div className="performance-box">
          <h3>Your Performance</h3>
          <p>Played: 34</p>
          <p>Won: 21</p>
          <p>Lost: 9</p>
          <p>Draw: 3</p>
        </div>

        <div className="community-box">
          <button className="whatsapp-btn">Join WhatsApp</button>
          <p>Mobile App Coming Soon</p>
        </div>
      </aside>
    </div>
  );
};

export default Home;
