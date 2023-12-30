import bcrypt from 'bcrypt'
import User from "../models/userModel.js";
import generateToken from '../config/jwtToken.js';


// create a new user

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User Already Exists! Login Instead" });
  }
   const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
  } catch (err) {
    next(err);
  }
  return res.status(201).json({ user });
};

// Sign In

export const Login = async (req, res, next) => {
  const { email, password } = req.body;
   
  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return res.status(404).json({ message: "Invalid username or password" });
  }
  const isPasswordCorrect =await bcrypt.compare(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
   const token = await generateToken();
  return res.status(200).json({token, message: "Login Successfull" });
};
