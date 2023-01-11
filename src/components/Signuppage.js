import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import LoginPage from './LoginPage'

export default function Signuppage() {

    let navigate = useNavigate()

    const [profile, setProfile] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        isloggedin: false
    })

    const { name, username, email, password, isloggedin } = profile

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const[n,setN]=useState(false);

    const handleClose = () => {
            setShow1(false);
            navigate("/login")
            // window.location.reload();
    }
    const handleClose2 = () => {
        setShow2(false);
        // navigate("/signup");
            window.location.reload();

}

    const onInputChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })

    }
    const flag = 1;
    //here async and await is used so that firstly one input is saved into database that means the process should first complete then only other values can submit
    const sendprofile = async (e) => {
        e.preventDefault();
        const result = await axios.get("http://localhost:8090/getallusers").then((res) => {
            res.data.forEach(element => {
                if (element.username == username) {
                    // alert("Duplicate username! Please try with another username!")
                    setShow2(true);
                    // window.location.reload()
                    flag = 0;
                }
            });
        })
        if (flag == 1) {
            setShow1(true)
            await axios.post("http://localhost:8090/signup", profile)
            // navigate("/login")
        }
    }

    return (
        <div className="cont1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4 heading">Register!</h2>
                        <form onSubmit={(e) => sendprofile(e)}>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label ll">
                                    Name
                        </label>
                                <input type="text" required className="form-control" placeholder="Enter your name" name="name" value={name} onChange={(e) => onInputChange(e)}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Username" className="form-label ll">
                                    Username
                        </label>
                                <input type="text" required className="form-control" placeholder="Enter your username" name="username" value={username} onChange={(e) => onInputChange(e)}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label ll">
                                    Email
                        </label>
                                <input type="email" required className="form-control" placeholder="Enter your email id" name="email" value={email} onChange={(e) => onInputChange(e)}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Password" className="form-label ll">
                                    Password
                        </label>
                                <input type="password" required className="form-control" placeholder="Enter your password" name="password" value={password} onChange={(e) => onInputChange(e)}></input>
                            </div>
                            {/* <button type="submit" className="btn btn-outline-primary">Submit</button> */}
                            <Button  type="submit" className="btn" variant="primary">
        Submit!
      </Button>
      <Modal show={show1} >
        <Modal.Header closeButton>
          <Modal.Title>SignUp!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you have successfully Signed Up!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Okay!!!!
          </Button>               
         
        </Modal.Footer>
      </Modal>
      <Modal show={show2}  >
        <Modal.Header closeButton>
          <Modal.Title>SignUp!</Modal.Title>
        </Modal.Header>
        <Modal.Body>OOPS! Duplicate username! Please try with another username!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Okay!!
          </Button>               
         
        </Modal.Footer>
      </Modal>
                        </form>
                        {/* <button type="submit" className="btn btn-outline-danger mt-3" onClick={navigate("/login")}>Login</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
