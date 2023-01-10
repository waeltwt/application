import React, { useEffect, useState } from 'react'
import './login.css'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Spinner from 'react-bootstrap/esm/Spinner';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../actions/userActions';
import { useForm } from 'react-hook-form';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errors, isAuth, loading } = useSelector((state) => state.user)
  const { register, handleSubmit } = useForm()
  useEffect(() => {
    if (isAuth) navigate('./Profile.js')
  }, [isAuth])
  const loginInput = (data) => {
    dispatch(loginUser(data, navigate));
  }



  //const dispatch = useDispatch ();
  // const navigate = useNavigate
  //const [loginInput,setLogininput] = useState({});
  //const { loading } = useSelector (state=>state.user) 
  //const handleChange = (e) => { 
  //setLogininput({...loginInput,[e.target.name]:e.target.value});

  //};
  //const handleSubmit = (e) =>{
  //e.preventDefault()
  //dispatch(loginUser(loginInput,navigate) )
  // };
  return (
    <div className='log'>

      <div className='logiiin'>

        <Col xs={4}>
          <Form className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label for='email' >Email address</Form.Label>
              <Form.Control id='email' {...register('email', { required: 'email is required', })}
                type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label for='password'>Password</Form.Label>
              <Form.Control id='password' {...register('password',
                { required: 'password is required' })}
                type="password" name='password' placeholder="Password" />
            </Form.Group>




            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit(loginInput)}>
              {loading ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner> : 'Submit'}

            </Button>
          </Form>
        </Col>
      </div>
    </div>
  );
};

export default Login;