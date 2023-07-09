import React from "react";
import { Link } from "react-router-dom";

function TutorCard({ tutorData }) {
  return (
    <div className="tutor-card">
      <img className="face" src={tutorData.src} alt="icon" />
      <div className="content">
        <p className="name">{tutorData.name}</p>
        <p className="star">{tutorData.star} / 5.0</p>
        <p className="hour">{tutorData.hour} hr</p>
        <p className="student">{tutorData.student} students</p>
        <p className="review">{tutorData.review}</p>
        <div className="buttons">
          <Link to="/tutor" className="more">
            more
          </Link>
          <Link to="/register">
            <button type="button">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TutorCard;
