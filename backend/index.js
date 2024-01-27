const express = require("express");
const mainRouter = require("./routes.js/index");
const userRouter = require("./routes.js/user");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1", mainRouter);
app.use("/user", userRouter);


