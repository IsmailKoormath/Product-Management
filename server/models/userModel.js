import mongoose, { Schema, model } from "mongoose";
import { ROLES } from "../constants/role.constants.js";
import { isValidEmail } from "../utils/email.regex.js";

export const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isValidEmail(v),
      message: "Invalid email address",
    },
  },
  password: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    maxLength: [225, "Your password cannot exceed 225 characters"],
    minLength: [6, "Your password should be contain minimum 6 characters"],
  },

  role: {
    type: String,
    default: ROLES.USER,
    enum: [ROLES.USER],
  },
});

const user = model("User", userSchema);
export default user;
