const http = require("http");

const express = require('express');
const app = express();

app.use('/add-product',(req,res,next)=>{
    console.log('i\'m in another middleware');
    res.send('<h1>Add products page</h1>');
});

app.use('/',(req,res,next)=>{
    console.log('i\'m in another middleware');
    res.send('Hello from Express');
});

app.listen(3000);



