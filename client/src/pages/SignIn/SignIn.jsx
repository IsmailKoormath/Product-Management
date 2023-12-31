import React, { useEffect, useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import mail from "../../assets/Icons/mail.svg"
import lock from "../../assets/Icons/lock.svg"
import CustomColorBotton from '../../components/CustomColoredButton/CustomColorBotton'
import CustomBorderButton from '../../components/CustomBorderbutton/CustomBorderButton'
import "./SignIn.css"
import { Link, useNavigate } from 'react-router-dom'
import { loginApi } from '../../Redux/api/UserApi'
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loginerror } = useSelector((state) => state.userReducer);

    const [user, setUser] = useState({})

    // sign In 
    const handleSubmit = (e) => {
        e.preventDefault()
       dispatch(loginApi(user,navigate))
    }

    // take input values
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if (token) {
            navigate('/home')
        }
    })
    return (
        <div className='signinPage'>
            <div className='signin-leftside'>
                <h1 className="signin-heading">Sign In to<br />
                    Your Account</h1>
                <CustomInput handleChange={handleChange} name={'email'} image={mail} type={"email"} placeholder={"Email"} />
                <CustomInput handleChange={handleChange} name={'password'} image={lock} type={"password"} placeholder={"Password"} />
                {loginerror ? <p style={{ color: 'red' }}> {loginerror}</p>:""}
                <a href='' className='forgot'>forgot password?</a>
                <CustomColorBotton handleSubmit={handleSubmit} text={"SIGN IN"} />
            </div>
           
            <div className='signin-rightside'>
                <h1>Hello Friend!</h1>
                <p>Enter your personal details and<br/> start your journey with us</p>
                <Link to='/signup'> <CustomBorderButton text={"SIGN UP"} /></Link> 
            </div>

        </div>
    )
}

export default SignIn