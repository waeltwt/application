import axios from "axios";
import {
  USER_REGISTER_FAILED, USER_REGISTER_LOADING, USER_REGISTER_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT, SET_USER
} from "../constants/userConstants";


import jwt_decode from 'jwt-decode'
export const registerNewUser = (userInfo, navigate) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_LOADING })
    const res = await axios.post('http://localhost:5000/api/user/register', userInfo)

    dispatch({ type: USER_REGISTER_SUCCESS })

  } catch (error) {
    dispatch({ type: USER_REGISTER_FAILED });
  }
};
export const loginUser = (userInfo, navigate) => dispatch => {
  axios.post('http://localhost:5000/api/user/login', userInfo).then(res => {
    navigate('/profile')
    const { token } = res.data
    localStorage.setItem('jwt', token)
    const decode = jwt_decode(token)
    localStorage.setItem('id', decode.id)

    dispatch(setUser(decode))


  }).catch(err => {
    console.log(err);
  })



};
export const logoutAction = (navigate) => dispatch => {
  localStorage.removeItem('jwt')
  localStorage.removeItem('id')
  navigate('/login')

  dispatch({
    type: SET_USER,
    payload: {}
  })
}

export const setUser = (decode) => ({
  type: USER_LOGIN_SUCCESS,
  payload: decode
})
