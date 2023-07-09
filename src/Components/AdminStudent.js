import React, { useEffect, useState } from "react";

function AdminStudent({ getDataList, addData }) {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const user = await getDataList("user");
    setUsers(user);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const sendRequest = async (uid) => {
    await addData("request", {
      uid,
      type: "payment",
    });
  };

  return (
    <div className="admin-student">
      {users
        .filter((user) => user.type === "student")
        .map((user) => {
          return (
            <div className="card">
              <div className="non-button">
                <p>UID : {user.uid}</p>
                <p>Email : {user.email}</p>
              </div>
              <button type="button" onClick={() => sendRequest(user.uid)}>
                Send request
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default AdminStudent;
