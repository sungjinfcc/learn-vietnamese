import React, { useEffect, useState } from "react";

function AdminFeedback({ getDataList }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const fetchData = async () => {
    const feedback = await getDataList("feedback");
    setFeedbacks(feedback);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-feedback">
      {feedbacks.map((feedback) => {
        return (
          <div className="card">
            <p>Name : {feedback.name}</p>
            <p>Email : {feedback.email}</p>
            <p>Message : {feedback.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AdminFeedback;
