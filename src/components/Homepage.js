import React from 'react'
import './styles.css'
function Header({ loggedin }) {
  return (
    <div className="header1">
      <div className="main">
        <div className="textbody">
          <h1><span>Welcome to Bus</span>Wala<span>!</span></h1>
          <p>Explore Karnataka with us!</p>
          <div className="options">
            {loggedin === true ? <a href="/findbuses" className="btn1">Book Tickets!</a> : <a href="/login" className="btn1">Book Tickets!</a>}
            {/* <a href="/signup" className="btn2">Sign Up!</a> */}
          </div>
        </div>
        {/* <div className="routess">
            <p>Our Popular Routes:</p>
            <center>
            <table className="tablewa">
              <tr>
                <td>Bangalore-Mysore     Bangalore-Ooty</td>
              </tr>
              <tr>
                <td>Mysore-Bangalore     Ooty-Bangalore</td>
              </tr>
            </table>
            </center>
          </div> */}
      </div>
    </div>
  )
}

export default Header
