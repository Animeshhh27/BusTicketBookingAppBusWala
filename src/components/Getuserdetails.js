import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';

export default function Getallusers({ loggedinuser }) {

    // let location = useLocation()

    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        await axios.get("http://localhost:8090/getuserdetails").then((res) => {
            setUsers(res.data)
            console.log(res.data)
        })
    }
    return (
        <div className="cont2">
            <div className="py-4">
                <table className="table border shadow t2">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            {/* <th scope="col">Is logged in</th> */}
                        </tr>
                    </thead>
                    <tbody>


                        <tr>
                            <td>{users.name}</td>
                            <td>{users.username}</td>
                            <td>{users.email}</td>
                            {/* <td>{users.isloggedin ? <h5>True</h5> : <h5>False</h5>}</td> */}
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}

