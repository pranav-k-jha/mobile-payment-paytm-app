const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes.js/index");



const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1", mainRouter);



app.listen((3000), () => console.log("Server started on port 3000"));