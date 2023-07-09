import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ addData }) {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [tutorState, setTutorState] = useState("");
  const [typeState, setTypeState] = useState("");
  const [locationState, setLocationState] = useState("");
  const [dateTimeState, setDateTimeState] = useState([]);
  const [purposeState, setPurposeState] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    tutor: false,
    type: false,
    location: false,
    dateTime: false,
    purpose: false,
  });

  const handleSubmit = async (e) => {
    const form = formRef.current;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const tutor = form.elements.tutor.value;
    const type = form.elements[7].value;
    const location = form.elements[8].value;
    const dateTimeInputs = form.elements.dateTime;
    const dateTime = Array.from(dateTimeInputs)
      .filter((input) => input.checked)
      .map((input) => input.value);
    const purpose = form.elements[14].value;
    const question = form.elements[15].value;

    if (validateForm()) {
      await addData("register", {
        name,
        email,
        tutor,
        type,
        location,
        dateTime,
        purpose,
        question,
      });
      navigate("/");
    } else {
      alert("form validation failed!");
    }
  };

  const validateForm = () => {
    const form = formRef.current;
    const name = form.elements[0];
    const email = form.elements[1];
    const { tutor } = form.elements;
    const type = form.elements[7];
    const location = form.elements[8];
    const dateTimeInputs = form.elements.dateTime;
    const purpose = form.elements[14];

    const updatedErrors = {
      name: name.value.trim() === "",
      email: !validateEmail(email.value),
      tutor: !tutor.value,
      type: type.value === "",
      location: type.value === "offline" && location.value.trim() === "",
      dateTime: !isCheckboxChecked(dateTimeInputs),
      purpose: purpose.value.trim() === "",
    };

    setErrors(updatedErrors);

    return Object.values(updatedErrors).every((error) => !error);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isCheckboxChecked = (checkboxInputs) => {
    return Array.from(checkboxInputs).some((input) => input.checked);
  };

  const handleTutorChange = (e) => {
    setTutorState(e.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      tutor: e.target.value === "",
    }));
  };
  const handleDateTimeChange = (e) => {
    const selectedDateTime = Array.from(e.target.form.elements.dateTime)
      .filter((input) => input.checked)
      .map((input) => input.value);
    setDateTimeState(selectedDateTime);
    setErrors((prevErrors) => ({
      ...prevErrors,
      dateTime: selectedDateTime.length === 0,
    }));
  };

  return (
    <div className="register">
      <form ref={formRef}>
        <p>Name</p>
        <input
          type="text"
          value={nameState}
          onChange={(e) => {
            setNameState(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              name: e.target.value.trim() === "",
            }));
          }}
        />
        {errors.name && <p className="error-message">This field is required</p>}
        <p>Email</p>
        <input
          type="email"
          value={emailState}
          onChange={(e) => {
            setEmailState(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: !validateEmail(e.target.value),
            }));
          }}
        />
        {errors.email && (
          <p className="error-message">Please enter a valid email address</p>
        )}
        <div className="tutor-div">
          <p>Tutor</p>
          <div className="tutor-radio">
            <input
              type="radio"
              name="tutor"
              value="Tutor A"
              checked={tutorState === "Tutor A"}
              onChange={handleTutorChange}
            />
            <span>Tutor A</span>
          </div>
          <div className="tutor-radio">
            <input
              type="radio"
              name="tutor"
              value="Tutor B"
              checked={tutorState === "Tutor B"}
              onChange={handleTutorChange}
            />
            <span>Tutor B</span>
          </div>
          <div className="tutor-radio">
            <input
              type="radio"
              name="tutor"
              value="Tutor C"
              checked={tutorState === "Tutor C"}
              onChange={handleTutorChange}
            />
            <span>Tutor C</span>
          </div>
          <div className="tutor-radio">
            <input
              type="radio"
              name="tutor"
              value="Tutor D"
              checked={tutorState === "Tutor D"}
              onChange={handleTutorChange}
            />
            <span>Tutor D</span>
          </div>
          <div className="tutor-radio">
            <input
              type="radio"
              name="tutor"
              value="Tutor E"
              checked={tutorState === "Tutor E"}
              onChange={handleTutorChange}
            />
            <span>Tutor E</span>
          </div>
        </div>
        {errors.tutor && (
          <p className="error-message">This field is required</p>
        )}
        <p>Course type</p>
        <select
          value={typeState}
          onChange={(e) => {
            setTypeState(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              type: e.target.value === "",
            }));
          }}
        >
          <option value="">-</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        {errors.type && <p className="error-message">This field is required</p>}
        <p>Location (Offline only)</p>
        <input
          type="text"
          value={locationState}
          onChange={(e) => {
            setLocationState(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              location: e.target.value.trim() === "",
            }));
          }}
        />
        {errors.location && (
          <p className="error-message">This field is required</p>
        )}
        <div className="date-time-div">
          <p>Date and Time</p>
          <div className="date-time">
            <input
              type="checkbox"
              name="dateTime"
              value="Monday"
              onChange={handleDateTimeChange}
            />
            <span>Monday</span>
          </div>
          <div className="date-time">
            <input
              type="checkbox"
              name="dateTime"
              value="Tuesday"
              onChange={handleDateTimeChange}
            />
            <span>Tuesday</span>
          </div>
          <div className="date-time">
            <input
              type="checkbox"
              name="dateTime"
              value="Wednesday"
              onChange={handleDateTimeChange}
            />
            <span>Wednesday</span>
          </div>
          <div className="date-time">
            <input
              type="checkbox"
              name="dateTime"
              value="Thursday"
              onChange={handleDateTimeChange}
            />
            <span>Thursday</span>
          </div>
          <div className="date-time">
            <input
              type="checkbox"
              name="dateTime"
              value="Friday"
              onChange={handleDateTimeChange}
            />
            <span>Friday</span>
          </div>
        </div>
        {errors.dateTime && (
          <p className="error-message">This field is required</p>
        )}
        <p>Purpose</p>
        <input
          type="text"
          value={purposeState}
          onChange={(e) => {
            setPurposeState(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              purpose: e.target.value.trim() === "",
            }));
          }}
        />
        {errors.purpose && (
          <p className="error-message">This field is required</p>
        )}
        <p>Question</p>
        <input type="text" />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
