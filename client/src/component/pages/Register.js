import './register.css'
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from '../../actions/userActions';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

//import { register as registerNewUser } from '../../actions/userActions';


const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading } = useSelector(state => state.user)
  const [registerInput, setRegisterinput] = useState({});
  const handleChange = (e) => {
    setRegisterinput({ ...registerInput, [e.target.name]: e.target.value });
    console.log(registerInput);
  };
  //const handleSubmit = (e) => {
  //e.preventDefault();
  //dispatch(registerNewUser(registerInput, navigate));
  //};

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { isAuth } = useSelector(state => state.user)
  useEffect(() => {
    if (isAuth) navigate('./Profile')

  }, [isAuth])


  const inputInfo = (registerInput) => {
    console.log(registerInput);
    dispatch(registerNewUser(registerInput)).then(() => {
      navigate('/login')
    })


  }

  return (
    <div className='register'>
      <Col xs={4}>
        <Form className='formm'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" {...register('firstName', { required: true })} onChange={handleChange} placeholder="Enter your first name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" {...register('lastName', { required: true })} onChange={handleChange} placeholder="Enter your last name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Civility</Form.Label>
            <Form.Control type="text" {...register('civility', { required: true })} onChange={handleChange} placeholder="Enter your civility" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Adress</Form.Label>
            <Form.Control type="text" {...register('adress', { required: true })} onChange={handleChange} placeholder="Enter your adress" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Phone Number</Form.Label>
            <Form.Control type="number" {...register('phoneNomber', { required: true })} onChange={handleChange} placeholder="Enter your phone number" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" {...register('email', {
              required: 'email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "you should input a valid email"
              }
            })} onChange={handleChange} placeholder="Enter email" />
          </Form.Group>
          {errors.email && errors.email.message}

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control  {...register('password',
              {
                required: 'password is required',
                minLength: {
                  value: 8,
                  message: "password should be 8 characters length"
                }
              })}
              type="password" onChange={handleChange} placeholder="Password" />


          </Form.Group>
          {errors.password && errors.password.message}


          <Form.Group className="mb-3" controlId="formBasicCheckbox">

            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit(inputInfo)}>
            {loading ? <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner> : 'Submit'}
          </Button>

        </Form>
      </Col>
    </div>


  );
}

export default Register;