import React, { useEffect, useState } from "react";
import axios from "axios";
import "./user.css";

function User() {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {

    try {

      const response = await axios.get(
        "http://localhost:4000/api/v1/get-Allusers"
      );

      setUsers(response.data);

    } catch (error) {

      console.log("Error fetching users:", error);

    }

  };

  useEffect(() => {

    getUsers();

  }, []);

  return (

    <div className="user-wrapper">

      <div className="user-card">

        <div className="user-header">

          <h2>User Management</h2>

        </div>

        <table className="user-table">

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Mobile</th>

              <th>Role</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {

              users.map((user) => (

                <tr key={user._id}>

                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.mobile}</td>

                  <td>

                    <span className="role-badge">

                      {user.userType?.role}

                    </span>

                  </td>

                  <td>

                    <span className="status active">

                      Active

                    </span>

                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default User;