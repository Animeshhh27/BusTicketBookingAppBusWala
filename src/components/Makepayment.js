import React,{useState} from "react";
import axios from 'axios'
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRadio,
    MDBRow,
} from "mdb-react-ui-kit";
import { Navigate, useLocation, useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Makepayment() {
    let navigate = useNavigate()
    let location = useLocation()
    let amount = location.state.price * location.state.number;
    console.log(amount)
    const [show, setShow] = useState(false);

    const afterclicking = async (e) => {

        setShow(true);



        location.state.passengerdata.forEach(element => {

            console.log("Check here" + element.username)

        });

        const busid = location.state.bus_id

        const number = location.state.number

         await axios.post("http://localhost:8090/getpassengers", location.state.passengerdata)

         await axios.put(`http://localhost:8090/updateavailabletickets/${busid}/${number}`)

        // navigate("/mybookings")

    }


    const handleClose = () => {
        setShow(false);
        navigate("/mybookings");
    }

    // const afterclicking = (e) => {
    //     setShow(true);
    //     // alert("Payment Done Successfully ")
    //     // navigate("/mybookings")
    // }

    return (
        <MDBContainer fluid className="py-5 cont2" style={{ backgroundColor: "#eee" }}>
            <MDBRow className="d-flex justify-content-center cont3">
                <MDBCol md="8" lg="6" xl="4">
                    <MDBCard className="rounded-3">
                        <MDBCardBody className="mx-1 my-2">
                            <div className="d-flex align-items-center ">
                                <div>
                                    <MDBIcon
                                        fab
                                        icon="cc-visa"
                                        size="4x"
                                        className="text-black pe-3"
                                    />
                                </div>

                            </div>
                            <div className="pt-3">
                                <div className="d-flex flex-row pb-3">
                                    <div
                                        className="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
                                        style={{ backgroundColor: "rgba(18, 101, 241, 0.07)" }}
                                    >
                                        <div className="d-flex align-items-center pe-3">
                                            <MDBRadio
                                                name="radioNoLabelX"
                                                id="radioNoLabel11"
                                                defaultChecked
                                            />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="mb-1 small text-primary">
                                                Total amount due: 
                      </p>
                                            <h6 className="mb-0 text-primary">₹{amount}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pb-1">
                                <a href="/" className="text-muted">
                                    Go back
                </a>
                                {/* <button className="btn btn-outline-primary" onClick={(e) => afterclicking(e)}>Pay</button> */}
                                <Button  type="submit" className="btn" variant="primary" onClick={(e) => afterclicking(e)}>
        Pay!
      </Button>
      <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Payment!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, Payment done successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Okay!!
          </Button>               
         
        </Modal.Footer>
      </Modal>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}