import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Getallusers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    loadUsers();
  }, [])


  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8090/getallusers")
    setUsers(result.data);
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
