import React from "react";

function Register() {
  return (
    <div className="register">
      <form>
        <p>Name</p>
        <input type="text" />
        <p>Email</p>
        <input type="text" />
        <p>Teacher</p>
        <input type="radio" />
        <p>Course type</p>
        <select>
          <option value="online">-</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        <p>Location(Offline only)</p>
        <input type="text" />
        <p>Date and Time selection board</p>
        <input type="checkbox" />
        <p>Purpose</p>
        <input type="text" />
        <p>Question</p>
        <input type="text" />
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default Register;
