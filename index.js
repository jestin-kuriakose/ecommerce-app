const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const authRoute = require('./routes/auth')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')

const app = express()

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB connection successfull"))
.catch((err) => console.log(err))

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/auth', authRoute);
app.use('/api/cart', cartRoute);
app.use('/api/orders', orderRoute);


app.listen( process.env.PORT || 5000, () => console.log(`Server running successfully`))