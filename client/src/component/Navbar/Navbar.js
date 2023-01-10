import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import { logout } from '../../slices/userSlice'
import { useNavigate } from 'react-router-dom';
import { logoutAction } from '../../actions/userActions';
import "./Navbar.css"

function navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isAuth, userInfo } = useSelector((state) => state.user)
  const LogoutHanlder = () => {
    dispatch(logoutAction(navigate))
  }
  return (
    <nav className="nav">

      <ul className='liste'>

        <li> <a href="/home" className='items'> HOME</a> </li>
        <li> <a href="/booking" className='items'>BOOKING</a></li>
        <li> <a href="/location" className='items'>LOCATION</a></li>
        <li> <a href="/contact" className='items'>CONTACT</a> </li>

        {isAuth ? (
          <>
            <h6>{userInfo.firstName}</h6>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch(logoutAction())}
            >
              Logout
            </span>

          </>
        ) : (
          <>

            <li> <a href="/register" className='items'>REGISTER</a> </li>
            <li> <a href="/login" className='items'>LOGIN</a> </li>
            <li> <a onClick={LogoutHanlder} className='items'>Logout</a> </li>

          </>
        )}


        <li> <a href="/profile" className='items'>PROFILE</a> </li>
        {/* <li> <a href="/post" className='items'>POST</a> </li> */}
      </ul>
    </nav>
  )
}

export default navbar
