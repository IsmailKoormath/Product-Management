import express from 'express'
import dbConnect from './config/dbConnection.js';
import dotenv from 'dotenv/config'
import cors from 'cors'
import auth from "./routes/authRoute.js";
import { errorHandler, notfound } from './middlewares/errorHandler.js';

const PORT = process.env.PORT || 4000
const app = express();


dbConnect();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use('/api/user',auth)

app.use(notfound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});