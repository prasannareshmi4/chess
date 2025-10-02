import React from "react";
import { useNavigate } from "react-router-dom";
import "./Friends.css";

const Friends = () => {
  const navigate = useNavigate();

  return (
    <div className="friends-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">ChessLing</h2>
        <ul>
          <li onClick={() => navigate("/home")}>Arena</li>
          <li className="active">Friends</li>
          <li>Results</li>
          <li>Learn</li>
        </ul>
      </aside>

      {/* Main Friends Section */}
      <main className="friends-main">
        <div className="friends-header">
          <button className="challenge-btn">Create Challenge Link</button>
          <button className="addfriend-btn">Add Friends via Link</button>
        </div>

        <div className="friend-list">
          <div className="friend-card">
            <span>Rana1009 - Waiting</span>
            <button>Accept Challenge</button>
          </div>
          <div className="friend-card">
            <span>nikhilnmo - Waiting</span>
            <button>Accept Challenge</button>
          </div>
          <div className="friend-card">
            <span>Suyog1341 - Online</span>
            <button onClick={() => navigate("/gamescreen")}>Challenge</button>
          </div>
          <div className="friend-card">
            <span>Arjun5924 - Offline</span>
            <button disabled>Challenge</button>
          </div>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="right-panel">
        <h3>Top Friends</h3>
        <ul>
          <li>Rana1009 - Battled 8 times</li>
          <li>Suyog1341 - Battled 7 times</li>
          <li>nikhilnmo - Battled 6 times</li>
          <li>Arjun5924 - Battled 5 times</li>
        </ul>
      </aside>
    </div>
  );
};

export default Friends;
