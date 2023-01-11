
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signuppage from './components/Signuppage';
import Getallusers from './components/Getallusers';
import LoginPage from './components/LoginPage';
import Getallbuses from './components/Getallbuses';
import FindBuses from './components/FindBuses';
import Prices from './components/Prices';
import Getuserdetails from './components/Getuserdetails';
import Addpassenger from './components/Addpassenger';
import Canceltickets from './components/Canceltickets';
import Makepayment from './components/Makepayment';
import Homepage from './components/Homepage'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Logout from './components/Logout';
import Mybookings from './components/Mybookings';

function App() {

  const [loggedin, setloggedin] = useState(false)
  const [loggedinuser, setloggedinuser] = useState("")
  // let loggedin = false;


  useEffect(() => {
    axios.get("http://localhost:8090/getloggedin").then((res) => {
      setloggedin(res.data);
      console.log(res.data)
    })
    axios.get("http://localhost:8090/getloggedinuser").then((res) => {
      setloggedinuser(res.data);
      console.log(res.data)
    })
    console.log(loggedinuser)
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar loggedin={loggedin}></Navbar>
        <Routes>
          <Route exact path="/" element={<Homepage loggedin={loggedin}></Homepage>}></Route>
          <Route exact path="/logout" element={<Logout></Logout>}></Route>
          <Route exact path="/mybookings" element={<Mybookings></Mybookings>}></Route>
          <Route exact path="/signup" element={<Signuppage></Signuppage>}></Route>
          <Route exact path="/getallusers" element={<Getallusers></Getallusers>}></Route>
          <Route exact path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route exact path="/getbuses" element={<Getallbuses></Getallbuses>}></Route>
          <Route exact path="/findbuses" element={<FindBuses></FindBuses>}></Route>
          <Route exact path="/price" element={<Prices></Prices>}></Route>
          <Route exact path="/getuserdetails" element={<Getuserdetails loggedinuser={loggedinuser}></Getuserdetails>}></Route>
          <Route exact path="/addpassengers" element={<Addpassenger loggedinuser={loggedinuser}></Addpassenger>}></Route>
          <Route exact path="/cancelt" element={<Canceltickets></Canceltickets>}></Route>
          <Route exact path="/makepayment" element={<Makepayment></Makepayment>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
