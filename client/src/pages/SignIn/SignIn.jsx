import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import mail from "../../assets/Icons/mail.svg"
import lock from "../../assets/Icons/lock.svg"
import CustomColorBotton from '../../components/CustomColoredButton/CustomColorBotton'
import CustomBorderButton from '../../components/CustomBorderbutton/CustomBorderButton'
import "./SignIn.css"

const SignIn = () => {
    return (
        <div className='signinPage'>
            <div className='signin-leftside'>
                <h1 className="signin-heading">Sign In to<br />
                    Your Account</h1>
                <CustomInput image={mail} type={"email"} placeholder={"Email"} />
                <CustomInput image={lock} type={"password"} placeholder={"Password"} />
                <a href='' className='forgot'>forgot password?</a>
                <CustomColorBotton text={"SIGN IN"} />
            </div>
           
            <div className='signin-rightside'>
                <h1>Hello Friend!</h1>
                <p>Enter your personal details and<br/> start your journey with us</p>
                <CustomBorderButton text={"SIGN UP"}/>
            </div>

        </div>
    )
}

export default SignIn