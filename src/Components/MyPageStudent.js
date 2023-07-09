import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyPageStudent({ uid, getRequests }) {
  const [requests, setRequests] = useState([]);
  const getRequest = async () => {
    const request = await getRequests(uid);
    setRequests(request);
  };
  useEffect(() => {
    getRequest();
  }, []);
  return (
    <div className="my-page-student">
      <div className="info">
        <img src="/assets/person.png" alt="face" />
        <p>name</p>
        <Link to="/mypage/student">&gt;&gt;</Link>
      </div>
      {requests && (
        <div className="admin-request">
          <p>payment request</p>
          <button type="button">Click to Pay</button>
        </div>
      )}
      <div className="card-current">
        <p className="name">Tutor name</p>
        <p className="class">Upcoming class info</p>
        <p className="date-time">7/3 10:00 ~ 12:00</p>
        <Link to="/mypage/student">more info</Link>
        <button type="button">Leave a review</button>
      </div>
    </div>
  );
}

export default MyPageStudent;
