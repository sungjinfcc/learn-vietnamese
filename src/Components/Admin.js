import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="admin">
      <div className="card">
        <p>Student</p>
        <Link to="/admin">&gt;&gt;</Link>
      </div>
      <div className="card">
        <p>Tutor</p>
        <Link to="/admin">&gt;&gt;</Link>
      </div>
      <div className="card">
        <p>Register</p>
        <Link to="/admin">&gt;&gt;</Link>
      </div>
      <div className="card">
        <p>Feedback</p>
        <Link to="/admin">&gt;&gt;</Link>
      </div>
    </div>
  );
}

export default Admin;
