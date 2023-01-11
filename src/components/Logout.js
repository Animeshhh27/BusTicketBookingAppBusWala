import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Logout() {
    let navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
         navigate("/login")
        window.location.reload();
    }
    // const handleShow = () => setShow(true);
  
    const onclciklogout = async (e) => {
        setShow(true);
        await axios.put("http://localhost:8090/loggedout");
        // alert("Successfully logged out ")
        // navigate("/login")
        // window.location.reload();
    }

    return (
        <div className="cont2">
            <h2 className="text-center m-4 heading">Are you sure you want to Logout!?</h2>
            {/* <button className="btn btn-outline-danger btu" type="submit" onClick={(e) => { onclciklogout(e) }}>Yes!</button> */}
            <Button  type="submit" className="btn" variant="primary" onClick={(e) => { onclciklogout(e) }}>
        Logout!
      </Button>
      <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Logout!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you have successfully Logged out!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Okay!!
          </Button>               
         
        </Modal.Footer>
      </Modal>
        </div>
    )
}
