import express from "express";
import cors from "cors";
import "dotenv/config";
import ip from "ip";
import path from "path";

import { initialize } from "./database/connection.js";

import authRouter from "./routes/auth.route.js";
import categoryRouter from "./routes/category.route.js";


import { errorHandling } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/uploads/products", express.static(path.join("uploads/products")));

app.use(
  authRouter,
  categoryRouter,
);

app.use(errorHandling);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(` App listening on the port ${ip.address()}:${port}`);
});

await initialize();
