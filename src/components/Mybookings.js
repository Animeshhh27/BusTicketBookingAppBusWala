import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Mybookings() {
    const [allbookings, setallbookings] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8090/getloggedinuser").then((res) => {
            //after getting the username from the above axios from that user name I am getting all the bookings done in that username 
            axios.get(`http://localhost:8090/getbookings/${res.data}`).then((res1) => {
                console.log(res1.data);
                setallbookings(res1.data);
            })
        })

        // allbookings = axios.get(`http://localhost:8090/getbooking/${{ loggedinuser }}`).then((res) => {
        //     setallbookings(res.data);
        //     console.log(res.data)
        // })

    }, [])

    let date = new Date()
    let timenow = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let today = new Date().toISOString().slice(0, 10);
    console.log(today)
    console.log(timenow);

    return (
        <div className="cont2">
            <div className="py-4 ">
                <table className="table border shadow t2">
                    <thead>
                        <tr>

                            <th scope="col">Id</th>
                            <th scope="col">PNR</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Bus Name</th>
                            <th scope="col">Departure</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Departure Date</th>
                            <th scope="col">Departure Time</th>
                            <th scope="col">Arrival Time</th>
                            <th scope="col">Cancel Status</th>
                            <th scope="col">Status of Journey</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allbookings.map((booking, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{booking.pnr}</td>
                                    <td>{booking.name}</td>
                                    <td>{booking.username}</td>
                                    <td>{booking.bus_name}</td>
                                    <td>{booking.location_from}</td>
                                    <td>{booking.location_to}</td>
                                    <td>{booking.departure_date}</td>
                                    <td>{booking.departure_time}</td>
                                    <td>{booking.arrival_time}</td>
                                    {console.log(booking.ticket_cancelled)}
                                    <td>{booking.cancelStat ? <h6>Cancelled</h6> : <h6>Not Cancelled</h6>}</td>
                                    <td>{booking.arrival_time < timenow && today < booking.arrival_date ? <h6>Completed</h6> : <h6>Not completed</h6>}</td>
                                    {/* <td>{booking.journey_status ? <h6>Completed</h6> : <h6>Booked</h6>}</td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
