import mongoose from "mongoose";

const dbConnect = () => {
  try {
    const dbConnection = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database error");
  }
};
export default dbConnect
