import React from "react";
import { Link } from "react-router-dom";

function TutorCard() {
  return (
    <div className="tutor-card">
      <img className="face" src="/assets/person.png" alt="icon" />
      <div className="content">
        <p className="name">Name</p>
        <p className="star">4.9 / 5.0</p>
        <p className="hour">327 hr</p>
        <p className="student">21 students</p>
        <p className="review">very good review</p>
        <div className="buttons">
          <Link to="/tutor">more</Link>
          <Link to="/register">
            <button type="button">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TutorCard;
