import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home({ addFeedback }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleSend = () => {
    if (validateForm()) {
      addFeedback("feedback", { name, email, message }, false, true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Form error");
    }
  };

  const validateForm = () => {
    const updatedErrors = {
      name: name.trim() === "",
      email: !isValidEmail(email),
      message: message.trim() === "",
    };

    setErrors(updatedErrors);

    return Object.values(updatedErrors).every((error) => !error);
  };

  const isValidEmail = (value) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className="home">
      <div className="card-register">
        <h1>Register now</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
          pretium vulputate sapien nec sagittis aliquam.
        </p>
        <Link to="/register">
          <button type="button">Register</button>
        </Link>
      </div>
      <div className="course-info">
        <div className="offline">
          <img src="/assets/private-course.png" alt="private-course" />
          <h3>Private Class</h3>
          <p>
            Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
          </p>
        </div>
        <div className="online">
          <img src="/assets/online-course.png" alt="online-course" />
          <h3>Online Class</h3>
          <p>A cras semper auctor neque vitae tempus.</p>
        </div>
      </div>
      <div className="about-us">
        <h2>About us</h2>
        <p>
          Ut pharetra sit amet aliquam id diam maecenas ultricies. Sed risus
          ultricies tristique nulla aliquet. Habitant morbi tristique senectus
          et netus et malesuada fames. Nunc aliquet bibendum enim facilisis
          gravida neque convallis. Eget velit aliquet sagittis id. Nisl nunc mi
          ipsum faucibus vitae aliquet nec. Libero enim sed faucibus turpis in
          eu mi bibendum. Aliquam id diam maecenas ultricies mi eget mauris
          pharetra et.
        </p>
        <p>
          Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida
          cum. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis
          feugiat. Suspendisse in est ante in nibh mauris cursus. Quam quisque
          id diam vel. Nulla facilisi morbi tempus iaculis urna id volutpat
          lacus laoreet. Dui id ornare arcu odio ut. Habitant morbi tristique
          senectus et netus et. Fames ac turpis egestas integer eget aliquet
          nibh praesent tristique. Malesuada fames ac turpis egestas.
        </p>
        <p>
          Sed faucibus turpis in eu. Tempus urna et pharetra pharetra massa
          massa ultricies. Sed sed risus pretium quam vulputate dignissim
          suspendisse in est. Mollis nunc sed id semper risus. Amet mauris
          commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Ornare
          suspendisse sed nisi lacus sed viverra tellus. Est sit amet facilisis
          magna etiam tempor orci. Enim tortor at auctor urna nunc id. Massa
          tincidunt dui ut ornare. Cras semper auctor neque vitae tempus quam
          pellentesque nec. Sit amet luctus venenatis lectus magna fringilla.
        </p>
      </div>
      <div className="ask-us">
        <p className="title">
          Send us a message, we will get back to you shortly
        </p>
        <div>
          <p className="label">Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prevErrors) => ({
                ...prevErrors,
                name: e.target.value.trim() === "",
              }));
            }}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <p className="error-message">Name is required</p>}
        </div>
        <div>
          <p className="label">Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prevErrors) => ({
                ...prevErrors,
                email:
                  e.target.value.trim() !== "" && !isValidEmail(e.target.value),
              }));
            }}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <p className="error-message">Please enter a valid email address</p>
          )}
        </div>
        <div>
          <p className="label">Message</p>
          <textarea
            rows="10"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setErrors((prevErrors) => ({
                ...prevErrors,
                message: e.target.value.trim() === "",
              }));
            }}
            className={errors.message ? "error" : ""}
          />
          {errors.message && (
            <p className="error-message">Message is required</p>
          )}
        </div>
        <button type="button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Home;
