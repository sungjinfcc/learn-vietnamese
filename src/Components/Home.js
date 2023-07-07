import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="card-register">
        <h1>Register now</h1>
        <p>Experience Vietnam</p>
        <button type="button">Register</button>
      </div>
      <div className="course-info">
        <div className="offline">
          <img src="/assets/private-course.png" alt="private-course" />
          <h3>Private Class</h3>
          <p>1 on 1</p>
        </div>
        <div className="online">
          <img src="/assets/online-course.png" alt="online-course" />
          <h3>Online Class</h3>
          <p>Zoom</p>
        </div>
      </div>
      <div className="about-us">
        <h2>About us</h2>
        <p>We are bla bla</p>
      </div>
      <div className="ask-us">
        <p>Send us a message, we will get back to you shortly</p>
        <p className="label">Name</p>
        <input type="text" />
        <p className="label">Email</p>
        <input type="text" />
        <p className="label">Message</p>
        <textarea rows="10" />
        <button type="button">Send</button>
      </div>
    </div>
  );
}

export default Home;
