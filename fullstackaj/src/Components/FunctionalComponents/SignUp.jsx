import React from "react";
import "../../assets/CSS/Navbar.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

var SignUp = () => {
  const [FName, SetFName] = useState("");
  const [LName, SetLName] = useState("");
  const [password, SetPassword] = useState("");
  const [email, SetEmail] = useState("");
  var navigate = useNavigate();

  var signup = async (event) => {
    event.preventDefault();
    var req = axios.post("https://fullstack-qxt8.onrender.com/signup", {
      firstName: FName,
      lastName: LName,
      email: email,
      password: password
    });
    console.log(req);
  };
  var navig =() =>{
       navigate('/login');
  }
  return (
    <div className='form-box'>
      <form onSubmit={signup}>
        <label htmlFor='Fname'>First Name: </label>
        <input
          type='text'
          id='FName'
          placeholder='Enter your First name'
          onChange={(e) => {
            SetFName(e.target.value);
          }}
        />
        <br />
        <label htmlFor='Lname'>Last Name: </label>
        <input
          type='text'
          id='LName'
          placeholder='Enter your Last name'
          onChange={(e) => {
            SetLName(e.target.value);
          }}
        />
        <br />
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          id='email'
          placeholder='Enter your Email'
          onChange={(e) => {
            SetEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor='pass'>Password: </label>
        <input
          type='password'
          id='pass'
          placeholder='Enter your password'
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
        />
        <br />
        <button type='submit' onClick={navig}>Submit </button>
      </form>
    </div>
  );
};
export default SignUp;
