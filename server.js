
const express = require('express');
const  route  = require('./route/userRouter');
const mongoose = require('mongoose')
require ('dotenv').config()
const cors = require('cors')




const App = express()



App.use(express.json())
App.use(express.urlencoded({extended: false}))
App.use(cors({
    origin: ['http://localhost:5175'],
    credentials:true
}))

App.use('/', route)


App.get('/', (req, res) =>{
    res.send('Welcome to my server')
})


const PORT = 7000




mongoose.connect(process.env.AD_URL)
.then(()=>{
    App.listen(PORT, () =>{
        console.log(`Server running on ${PORT}`)
    })
}).catch((error) =>{
    console.log(error)
})

// mongodb+srv://hardeytollar01:taQYM3J6JX1u6hN1@cluster0.m0nktue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
