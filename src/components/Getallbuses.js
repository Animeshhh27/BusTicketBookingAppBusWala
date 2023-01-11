import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Getallbuses() {
    const [buses, setBuses] = useState([])
    useEffect(() => {
        loadBuses();
    }, [])


    const loadBuses = async () => {
        const result = await axios.get("http://localhost:8090/getbuses")
        setBuses(result.data);
    }

    return (
        <div className="cont2">
            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Bus Name</th>
                                <th scope="col">Bus Type</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Toal seats</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buses.map((bus, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{bus.bus_name}</td>
                                        <td>{bus.bus_type}</td>
                                        <td>{bus.location_from}</td>
                                        <td>{bus.location_to}</td>
                                        <td>{bus.total_seats}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
