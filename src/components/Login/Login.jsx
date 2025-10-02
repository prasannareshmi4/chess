import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-left">
        <h1>SCORE BIG <br /> IN 6 MOVES</h1>
        <p>
          A fast-paced chess duel where you have just six moves to outscore or 
          checkmate your opponent in a high-intensity point battle.
        </p>
        <button className="google-btn" onClick={() => navigate("/home")}>
          ENTER GAME
        </button>
      </div>
      <div className="landing-right">
        <div className="landing-box"></div>
      </div>
    </div>
  );
};

export default Login;
