require("dotenv/config")
const express = require('express');
const mongoose = require("mongoose");
const morgan = require("morgan")
const colors = require('colors');
const {connectDB} = require("./db");
const userRoute = require("./routes/UserRoute");

connectDB();

const app = express();

app.use(express.json());
app.use(morgan("combined"));

app.use("/user", userRoute);

port = process.env.PORT || 8000;
app.listen(port, console.log(`server running on port ${port}`.cyan))