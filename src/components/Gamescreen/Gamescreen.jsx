import React from "react";
import "./Gamescreen.css";

const Gamescreen = () => {
  return (
    <div className="game-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">ChessLing</h2>
        <ul>
          <li className="active">Play</li>
          <li>Friends</li>
          <li>Results</li>
          <li>Learn</li>
        </ul>
      </aside>

      {/* Game Main */}
      <main className="game-main">
        <div className="scorebar">
          <span>You: 18</span>
          <span>Opponent: 12</span>
        </div>

        <div className="board-container">
          {/* Chessboard Image */}
          <div className="chessboard">
            <img src="/chess.png" alt="Chess Board" />
          </div>

          {/* Chat Panel */}
          <div className="chat-panel">
            <h3>Chat & Moves</h3>
            <div className="chat-box">Messages will appear here...</div>
            <input type="text" placeholder="Send a message..." />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gamescreen;
