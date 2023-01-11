import React from 'react'
import { useNavigate } from 'react-router'
import Dropdown from 'react-bootstrap/Dropdown';




export default function Navbar({ loggedin }) {
    let navigate = useNavigate()

    const clickHomepage = (e) => {

        navigate("/")

    }

    return (



        <div className="navbar" >


            <h2 className="logo" onClick={(e) => { clickHomepage(e) }}><span>Bus</span>Wala</h2>

            {loggedin === false ? <a className="btn" style={{ color: "black" }} href="/login">Login!</a>

                : <a className="btn" href="/logout">Logout!</a>}



            {loggedin === false ? <a className="btn" href="/signup">SignUp!</a> : <a className="btn" href="/findbuses">Book tickets!</a>}

            <a className="btn" href="/cancelt">Cancel Tickets!</a>

            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="drop">
                    <img className="iconn" src="icon.jfif" alt="user"></img>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/getuserdetails">Profile!</Dropdown.Item>
                    <Dropdown.Item href="/mybookings">My Bookings!</Dropdown.Item>
                    {loggedin === true ? <Dropdown.Item href="/logout">Logout!</Dropdown.Item> : <Dropdown.Item href="/login">Login!</Dropdown.Item>}
                </Dropdown.Menu>
            </Dropdown>


        </div >
    )
}