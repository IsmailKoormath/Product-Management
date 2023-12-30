import React, { useState } from "react";
import "./SignUp.css"
import CustomBorderButton from "../../components/CustomBorderbutton/CustomBorderButton";
import CustomInput from "../../components/CustomInput/CustomInput";

import user from "../../assets/Icons/user.svg"
import mail from "../../assets/Icons/mail.svg"
import lock from "../../assets/Icons/lock.svg"
import CustomColorBotton from "../../components/CustomColoredButton/CustomColorBotton";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpApi } from "../../Redux/api/UserApi";

const SignUp = () => {
const [userDetails,setUserDetails]=useState({})
  const { error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch()
  const navigate = useNavigate()
// sign up 
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signUpApi(userDetails,navigate))
  }

  // take input values
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="signupPage">
      <div className="signup-leftSide">
        <h1>Welcome Back!</h1>
        <p>
          To keep connected with us plase
          <br />
          login with your personal info
        </p>
        <Link to='/'> <CustomBorderButton text={"SIGN IN"} /></Link>
      </div>
      <div className="signup-rightSide">
        <h1 className="createAccount">Create Account</h1>
        <CustomInput handleChange={handleChange} name={'name'}  image={user} type={"text"} placeholder={"Name"} />
        <CustomInput handleChange={handleChange} name={'email'} image={mail} type={"email"} placeholder={"Email"} />
        <CustomInput handleChange={handleChange} name={'password'} image={lock} type={"password"} placeholder={"Password"} />
        {error ? <p style={{ color: 'red' }}> {error}</p> : ""}
        <CustomColorBotton handleSubmit={handleSubmit} text={"SIGN UP"} />
      </div>
    </div>
  );
};

export default SignUp;
