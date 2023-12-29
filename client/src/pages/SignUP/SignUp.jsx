import React from "react";
import "./SignUp.css"
import CustomBorderButton from "../../components/CustomBorderbutton/CustomBorderButton";
import CustomInput from "../../components/CustomInput/CustomInput";

import user from "../../assets/Icons/user.svg"
import mail from "../../assets/Icons/mail.svg"
import lock from "../../assets/Icons/lock.svg"
import CustomColorBotton from "../../components/CustomColoredButton/CustomColorBotton";

const SignUp = () => {
  return (
    <div className="signupPage">
      <div className="signup-leftSide">
        <h1>Welcome Back!</h1>
        <p>
          To keep connected with us plase
          <br />
          login with your personal info
        </p>
        <CustomBorderButton text={"SIGN IN"} />
      </div>
      <div className="signup-rightSide">
        <h1 className="createAccount">Create Account</h1>
        <CustomInput image={user} type={"text"} placeholder={"Name"} />
        <CustomInput image={mail} type={"email"} placeholder={"Email"} />
        <CustomInput image={lock} type={"password"} placeholder={"Password"} />

        <CustomColorBotton text={"SIGN UP"} />
      </div>
    </div>
  );
};

export default SignUp;
