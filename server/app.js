const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require("express");
const app = express();

// loading env
dotenv.config({path:'./config.env'})

// Database Connection
require("./db/connection")

const port = process.env.PORT;

// middleware
const middleware = (req,res,next)=>{
	console.log(`middleware initialized`);
	next();
}

app.get('/',(req,res)=>{
	res.send("Hello world from the server");
});

app.get("/home", middleware, (req,res)=>{
	res.send(`server from home route`);
});

app.listen(port,()=>{
	console.log(`server is running at port ${port}`);
});
