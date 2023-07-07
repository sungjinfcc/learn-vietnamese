import React from "react";
import { Link } from "react-router-dom";

function TutorCard() {
  return (
    <div className="card-current">
      <p className="name">Student name</p>
      <p className="class">Upcoming class info</p>
      <p className="date-time">7/3 10:00 ~ 12:00</p>
      <Link to="/mypage/tutor">
        <button type="button">more info</button>
      </Link>
    </div>
  );
}

export default TutorCard;
