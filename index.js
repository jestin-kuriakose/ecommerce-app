const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const userRoute = require('./routes/user')

const app = express()

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB connection successfull"))
.catch((err) => console.log(err))

app.use('/api', userRoute);



app.listen( process.env.PORT || 5000, () => console.log(`Server running successfully`))