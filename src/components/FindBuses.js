import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Select from 'react-select'

export default function FindBuses() {
    let navigate = useNavigate()
    const [fromData , setFromData] = useState({label:'', value:''});
    const [toData , setToData] = useState({label:'',value:''})
    const [bus_route, setBus] = useState([])
    const [fetch_buses, fetchBus] = useState([])
    const [findbus, setfindBus] = useState(false)
    const { location_from, location_to } = bus_route

    let date = new Date()
    let today_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let today_date = new Date().toISOString().slice(0, 10);

    const busesfrom = [
        { label: 'Bangalore', value: 'Bangalore' },
        { label: 'Mysore', value: 'Mysore' },
        { label: 'Ooty', value: 'Ooty' },
    ];
    const busesto = [
        { label: 'Bangalore', value: 'Bangalore' },
        { label: 'Mysore', value: 'Mysore' },
        { label: 'Ooty', value: 'Ooty' },
    ];

    // const onInputChange = (e) => {
        
    //     setBus({ ...bus_route, [e.target.name]: e.target.value })
    // }

    const getBuses = async (e) => {
        e.preventDefault();
        await axios.get("http://localhost:8090/getbuses").then((e) => e.data.forEach(element => {
            if (element.location_from === fromData.label && element.location_to === toData.label) {
                // fetchBus({ ...fetch_buses, element })
                fetch_buses.push(element)
                fetchBus(fetch_buses)
            }
        }))

        //The below code is not working for this but it is working for login and signup pages 

        // console.log(res_data.data)
        // res_data.forEach(element => {
        //     if (element.location_from === location_from && element.location_to === location_to) {
        //         console.log(element.location_to)
        //         fetchBus({ ...fetch_buses, element })
        //     }
        // });
        setfindBus(true);

    }

    // const getBuses = async (e) =>{
    //     e.preventDefault();
    //     const result = await axios.post("http://localhost:8090/postbuses",bus_route)


    // }
    console.log(fromData)
    console.log(toData)
    if (findbus === false) {
        return (
            <div className="contfromto">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4 heading">Plan your Journey!</h2>
                        <form onSubmit={(e) => getBuses(e)}>
                            <div className="mb-3">
                                <label htmlFor="location_from" className="form-label ll">
                                    From:
                        </label>
                                {/* <input type="text" required className="form-control" placeholder="Enter your departure location" name="location_from" value={location_from} onChange={(e) => onInputChange(e)}></input>
 */}
                                <Select
                                    name="location_from"
                                    options={busesfrom}
                                    value={fromData}
                                    onChange={(opt) => setFromData({label:opt.label , value:opt.value})}
                                />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="location_to" className="form-label ll">
                                    To:
                        </label>
                                {/* <input type="text" required className="form-control" placeholder="Enter your destination" name="location_to" value={location_to} onChange={(e) => onInputChange(e)}></input> */}
                                <Select
                                    options={busesto}
                                    value={toData}
                                    onChange={(opt) => setToData({label:opt.label , value:opt.value})}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Find Buses</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="cont2">
                <div className="container">
                    <div className="py-4">
                        <table className="table border shadow t2">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Bus Name</th>
                                    <th scope="col">Bus Type</th>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Dep Date</th>
                                    <th scope="col">Total seats</th>
                                    <th scope="col">Available Seats</th>
                                    <th scope="col">Price of Ticket</th>
                                    <th scope="col">Book Tickets</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    fetch_buses.map((bus, index) => (
                                        <tr>
                                            <th scope="row" key={index}>{index + 1}</th>
                                            <td>{bus.bus_name}</td>
                                            <td>{bus.bus_type}</td>
                                            <td>{bus.location_from}</td>
                                            <td>{bus.location_to}</td>
                                            <td>{bus.departure_date}</td>
                                            <td>{bus.total_seats}</td>
                                            <td>{bus.available_seats}</td>
                                            <td>{bus.prices}</td>
                                            {/* {(bus.available_seats > 0 && bus.departure_date >= today_date && bus.departure_time >= today_time) ? <td><button type="submit" className="btn3 btn-outline-danger" key={index} onClick={(e) => navigate("/addpassengers", { state: { busid: bus.id, price: bus.prices, bus_name: bus.bus_name, location_from: bus.location_from, location_to: bus.location_to, departure_date: bus.departure_date, departure_time: bus.departure_time, arrival_time: bus.arrival_time } })}>Book Tickets</button></td> : <h6>No seats available.</h6>} */}
                                            {(bus.available_seats > 0) ? <td><button type="submit" className="btn3 btn-outline-danger" key={index} onClick={(e) => navigate("/addpassengers", { state: { busid: bus.id, price: bus.prices, bus_name: bus.bus_name, location_from: bus.location_from, location_to: bus.location_to, departure_date: bus.departure_date, departure_time: bus.departure_time, arrival_time: bus.arrival_time } })}>Book Tickets</button></td> : <h6>No seats available.</h6>}
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
}


