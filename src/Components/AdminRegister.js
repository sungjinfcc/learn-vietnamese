import React, { useEffect, useState } from "react";

function AdminRegister({ getDataList }) {
  const [registers, setRegisters] = useState([]);
  const fetchData = async () => {
    const register = await getDataList("register");
    setRegisters(register);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-register">
      {registers.map((register) => {
        return (
          <div className="card">
            <p>Name : {register.name}</p>
            <p>Email : {register.email}</p>
            <p>Tutor : {register.tutor}</p>
            <p>Type : {register.type}</p>
            <p>Location: {register.location || "-"}</p>
            <p>
              Date/Time :{" "}
              {register.dateTime.map((date) => {
                return <span>{date} </span>;
              })}
            </p>
            <p>Purpose : {register.purpose}</p>
            <p>Question : {register.question}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AdminRegister;
