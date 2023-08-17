require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authController = require("./controllers/authController");
const roomController = require("./controllers/roomController");
const updateController=require('./controllers/updateController')
const app = express();

// connect db 
mongoose.set ('strictQuery',false)
mongoose.connect(process.env.MONGO_URL, () => console.log('Db is successfully connected'))

// middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/auth', authController)
app.use('/room', roomController)
app.use('/upload', updateController)

const port = process.env.PORT || 5000;



// start our server 
app.listen(process.env.PORT, () => console.log('Server is running'))