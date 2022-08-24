//import express package so that it can be used to create express app
const { response } = require('express')
let express = require ('express')
let mongoose = require('mongoose')
let offers = require("./offers")

//create express app
let app = express()

//use mongoose to connect with mongodb database
mongoose.connect('mongodb://localhost:27017/ecommerce')
let db = mongoose.connection

//check if connection is established
db.once('open',()=>{
    console.log('Connected to mongodb server!');
})

//create first end point
app.get("/",(request,response)=>{
    let msg = {
        'message':'Request is success',
        'requsetType': 'Get'

    }
    response.json(msg)
})

app.post("/",(request,response)=>{
    console.log('In post request function');
    let msg = {
        'message':'Request is success',
        'requestType': 'POST'
    }
    response.json(msg)
})

app.get("/get/friends",(req,res)=>{
    res.json({
        data:'list of friends',
        requestType:'GET'
    })
})


app.get("/get/offers",(req,res)=>{
    offers.find({},(error,data)=>{
        if(error){
            res.send(error)
        }
        else{
            console.log(data)
            res.json(data)
        }

    })
})

const PORT = 4111
app.listen(PORT,()=>{
    console.log('Listening to port:"' +PORT);
})
