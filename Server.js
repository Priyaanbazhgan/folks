//express is a backend  web application framework for node.js
//install express server(npm i express)
//import the express server;
const express = require('express');
//initializing the express in the variable;
const app = express();
//instal the body-parser(npm i body-parser)
//import the body-parser 
const bodyParser = require('body-parser')
//import the dbconnection in the server
const dbconnection = require('./Utility/dbconnection');
const userRouter = require('./Router/UserRouter');
const port = 3000;

//initializing db connectivity
dbconnection();

// parse content-type : application/json from request header.
// it helps to convert string from UI request body to actual object.
app.use(bodyParser.json());

//sub api url are given  in the userRouter 
app.use('/api', userRouter);


//to create the port;
app.listen(port, () => {
    console.log(`floks app server started at port ${port} at ${new Date}`)
})