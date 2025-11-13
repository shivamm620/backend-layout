import express from "express";
import { globalErrorHandler } from "./middlewares/globalErrorHandler.js";

const app = express();
app.use(express.json());

//routes

//globalErrorHandler always after routes
app.use(globalErrorHandler);

app.listen(3000, () => {
  console.log("server started");
});
