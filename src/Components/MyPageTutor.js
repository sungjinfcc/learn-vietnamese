import React from "react";
import { Link } from "react-router-dom";
import ClassCard from "./Modules/ClassCard";

function MyPageTutor() {
  return (
    <div className="my-page-tutor">
      <div className="info">
        <img src="/assets/person.png" alt="face" />
        <p className="name">name</p>
        <p className="star">4.9/5.0</p>
        <Link to="/mypage/tutor">&gt;&gt;</Link>
      </div>
      <div className="admin-request">
        <p>payment request</p>
        <button type="button">Click to Pay</button>
      </div>
      <ClassCard />
      <ClassCard />
      <ClassCard />
    </div>
  );
}

export default MyPageTutor;
