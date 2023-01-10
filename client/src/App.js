import React from "react";
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./component/pages/home";
import Contact from "./component/pages/contact";
import Booking from "./component/pages/booking";
import Location from "./component/pages/location";
import Register from "./component/pages/Register";
import Login from "./component/pages/login"
// import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./component/pages/Profile";
import Post from "./component/pages/Post";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/location' element={<Location />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/post' element={<Post/>} /> */}
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
