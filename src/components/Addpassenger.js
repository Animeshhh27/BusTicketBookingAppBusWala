import { Modal } from 'bootstrap'

import React, { useState } from 'react'

import axios from 'axios'

import { Navigate, useLocation, useNavigate } from 'react-router';




function Addpassenger({ loggedinuser }) {



    let navigate = useNavigate()

    let location = useLocation()

    let today = new Date().toISOString().slice(0, 10);




    const [passengers, setPassenger] = useState({

        aadhar: "",

        bookingDate: today,

        cancelStat: "",

        dob: "",

        name: "",

        username: loggedinuser,

        contact: "",

        journeyStat: "",

        bus_name: location.state.bus_name,

        location_from: location.state.location_from,

        location_to: location.state.location_to,

        departure_date: location.state.departure_date,

        departure_time: location.state.departure_time,

        arrival_time: location.state.arrival_time,

        busid: location.state.busid

    });



    const [passengerdata, setPassengerdata] = useState([])




    const [count, setcount] = useState(0)

    const { aadhar, bookingDate, cancelStat, dob, name, username, contact, journeyStat } = passengers



    const onInputChange = (e) => {



        setPassenger({ ...passengers, [e.target.name]: e.target.value })

    }





    const pushpassenger = async (e) => {



        e.preventDefault();



        setcount(count + 1);

        // axios.post("http://localhost:8090/getpassengers", passengers)

        // console.log(passengers.username)

        passengerdata.push(passengers)

        setPassengerdata(passengerdata)

        // console.log(passengerdata)





        // axios.get("http://localhost:8090/getloggedinuser")

        // .then((res) => {




        // console.log(res.data)

        // })

        // const bus_id = location.state.busid;



        // console.log(bus_id);

        // console.log(location.state.busid);




    }



    const paymentclickhandler = (e) => {

        navigate("/makepayment", { state: { bus_id: location.state.busid, number: count, price: location.state.price, passengerdata: passengerdata } });

    }





    return (



        <div className="cont2">



            <br></br>

            <br></br>

            <button type="button" className="btn2 btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">

                Add Passenger {count + 1}

            </button>



            <br />

            <br />



            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">



                <div className="modal-dialog">



                    <div className="modal-content">



                        <div className="modal-header">

                            <h5 className="modal-title" id="exampleModalLabel">Passenger Details!</h5>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        </div>



                        <div className="modal-body">



                            <form onSubmit={pushpassenger}>



                                <div className="mb-3">

                                    <label htmlFor="Aadhar_number" minLength={16} className="form-label">Aadhar Number</label>

                                    <input type="text" required className="form-control" placeholder="Enter your aadhar number" name="aadhar" value={aadhar} onChange={(e) => onInputChange(e)}></input>

                                </div>



                                {/* <div className="mb-3">

                                    <label htmlFor="Booking_Date" className="form-label">Booking Date</label>

                                    <input type="date" required className="form-control" placeholder="Select Date" name="bookingDate" value={bookingDate} onChange={(e) => onInputChange(e)}></input>

                                </div> */}



                                <div className="mb-3">

                                    <label htmlFor="dob" className="form-label">Date of Birth</label>

                                    <input type="date" required className="form-control" placeholder="Select Date" name="dob" value={dob} onChange={(e) => onInputChange(e)}></input>

                                </div>



                                <div className="mb-3">

                                    <label htmlFor="name" className="form-label">Name of Passenger</label>

                                    <input type="text" required className="form-control" placeholder="Name of passenger" name="name" value={name} onChange={(e) => onInputChange(e)}></input>

                                </div>




                                <div className="mb-3">

                                    <label htmlFor="mobile_number" minLength={10} className="form-label">Contact Number</label>

                                    <input type="number" required className="form-control" placeholder="Enter contact number" name="contact" value={contact} onChange={(e) => onInputChange(e)}></input>

                                </div>



                                <input type="submit" className="btn btn-secondary" data-bs-dismiss="modal" ></input>



                            </form>

                        </div>

                    </div>

                </div>

            </div>



            <button type="button" className="btn btn-outline-primary" onClick={(e) => paymentclickhandler(e)}>Make Payment</button>



        </div>



    )

}





export default Addpassenger