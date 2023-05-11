require("dotenv").config();
const mongoose = require("mongoose");
const connection = require("./config/db");
const express = require("express");
const app = express();
const cors = require('cors');
const fs=require('fs');
connection();
mongoose.set("strictQuery", true);



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users',require("./routes/userRoutes"));
app.use('/product',require("./routes/balloonsCategoryroutes"));
app.use('/allballoons',require("./routes/balloonsRoutes"));
app.use("/contactus", require("./routes/contactusRoutes"));
app.use("/orders", require("./routes/orderRoutes"));
app.use("/hero", require("./routes/heroImageRoutes"));


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));