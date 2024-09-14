const express = require('express');
require('dotenv').config();
const path = require('path');
const mongodb = require('./config/mongodb');
const payment = require('./models/payments');
const app =express();

const Razorpay = require("razorpay");
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });



app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extend:true}));

app.get('/', (req,res)=>{
    res.render('index');
    
    
})

app.listen(3000,()=>{
    console.log("port 3000 ");
})