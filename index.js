const express = require('express');
const server = express();
const bodyParser=require('body-parser');
const morgan=require('morgan'); 
require('dotenv').config();

server.use(bodyParser.json({limit:'50mb'}));
server.use(bodyParser.urlencoded({limit:'50mb', extended:true}));
server.use(morgan("dev"));

const port = 7000;

const Controller = require('./controller');


server.post('/insert',Controller.insertData);   
server.get('/get',Controller.getData);


server.listen(port,(err)=>{
    if(err)
        return console.log("Error in setting up server!");
    console.log(`Server is running at port ${port}`);
});