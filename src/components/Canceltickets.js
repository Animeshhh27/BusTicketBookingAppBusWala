import axios from 'axios'



import React, { useState } from 'react'

import { useNavigate } from 'react-router';






export default function Canceltickets() {



    let navigate = useNavigate()



    // const[cancel,setCancel] =useState(0)



    // const onInputchange=(e)=>{



    //     setCancel({...cancel,"pnr":e.target.value})



    // }



    const [pnr_details, setpnr_details] = useState(0);



    const [flag, setflag] = useState(false);



    const [details, setdetails] = useState([]);



    // const details2=[];



    const submithandler = async (e) => {



        setflag(true);



        e.preventDefault()



        await axios.get("http://localhost:8090/getpassengers")



            .then((res) => {



                console.log(res.data);



                res.data.forEach(i => {

                    if (i.pnr == parseInt(pnr_details)) {



                        console.log(i.pnr);



                        setdetails({ ...details, "pnr": i.pnr, "username": i.username, "name": i.name, "phone": i.contact, "dob": i.dob, "aadhar": i.aadhar, "booking": i.bookingDate })



                    }



                    //    details1.push(i.pnr);



                    //    details2.push(i.userName);



                    // console.log(details1);



                    // console.log(details2);





                });



            })



    }



    const submithandler2 = async (e) => {



        e.preventDefault();



        const result = await axios.put(`http://localhost:8090/canceled/${pnr_details}`)

            .then((res) => {

                axios.put(`http://localhost:8090/updateticketsadd/${res.data}`)

            })



        navigate("/mybookings")



        console.log(result)

        window.location.reload();





    }



    if (flag == false) {



        return (




            <div className="contlog">



                <div className="row">



                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">



                        <h2 className="text-center m-4 heading">Cancel Ticket!</h2>



                        <form onSubmit={(e) => submithandler(e)}>



                            <div className="mb-3">



                                <label htmlFor="Username" className="form-label ll">



                                    Please enter your PNR:



            </label>



                                <input type="text" required className="form-control " placeholder="Enter your PNR" name="pnr" onChange={(e) => setpnr_details(e.target.value)}></input>



                            </div>



                            <button type="submit" className="btn btn-outline-primary">Submit!</button>



                        </form>



                    </div>



                </div>



            </div>



        )



    }





    else {



        return (



            <div className="cont2">



                <h1>Ticket Details!</h1>



                <form onSubmit={(e) => submithandler2(e)}>



                    <table className="table border shadow t2">



                        <thead>



                            <tr>



                                <th>PNR</th>



                                <th>UserName</th>



                                <th>Name</th>



                                <th>Phone</th>



                                <th>DOB</th>



                                <th>Aadhar</th>



                                <th>Booking Date</th>



                            </tr>



                        </thead>



                        <tbody>



                            <tr>



                                <td><h4>{details.pnr}</h4></td>



                                <td><h4>{details.username}</h4></td>



                                <td><h4>{details.name}</h4></td>



                                <td><h4>{details.phone}</h4></td>



                                <td><h4>{details.dob}</h4></td>



                                <td><h4>{details.aadhar}</h4></td>



                                <td><h4>{details.booking}</h4></td>





                            </tr>



                        </tbody>



                    </table>



                    <button className="btn">Cancel Ticket!</button>



                </form>



            </div>



        )



    }



}