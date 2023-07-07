import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login-card">
        <h1>Welcome!</h1>
        <p>By logging in you agree to our terms and condition</p>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button type="button">Login</button>
        <div className="social-buttons">
          <button type="button">G</button>
          <button type="button">F</button>
          <button type="button">A</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
