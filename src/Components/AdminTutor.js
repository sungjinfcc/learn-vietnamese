import React, { useEffect, useState } from "react";

function AdminTutor({ getDataList }) {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const user = await getDataList("user");
    setUsers(user);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-tutor">
      {users
        .filter((user) => user.type === "tutor")
        .map((user) => {
          return (
            <div className="card">
              <p>UID : {user.uid}</p>
              <p>Email : {user.email}</p>
            </div>
          );
        })}
    </div>
  );
}

export default AdminTutor;
