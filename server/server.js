import express from "express";
import cors from "cors";
import "dotenv/config";
import ip from "ip";
import path from "path";

import { initialize } from "./config/dbConnection.js";

import authRouter from "./routes/authRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import subcategoryRouter from "./routes/subcategory.router.js";
import productRouter from "./routes/product.router.js";
import wishListRouter from "./routes/wishList.route.js";

import { errorHandling } from "./middlewares/error.middleware.js";

const app = express();

await initialize();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/uploads/products", express.static(path.join("uploads/products")));


app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.use(
  authRouter,
  categoryRouter,
  subcategoryRouter,
  productRouter,
  wishListRouter
);

app.use(errorHandling);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on the port ${ip.address()}:${port}`);
});
