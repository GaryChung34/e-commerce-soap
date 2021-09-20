import data from './data.js'
import express from 'express'
import dotenv from 'dotenv'
import config from './config.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import usersRoute from './routes/usersRoute.js'
import productRoute from './routes/productRoute.js'
import orderRoute from './routes/orderRoute.js'


dotenv.config()
const mongodbUrl = config.MONGODB_URL
console.log(mongodbUrl)
mongoose.connect(mongodbUrl, {
	useNewUrlParser: true
}).catch(error => console.log(error.reason))
console.log('connect mongo successful')


const app = express()
app.use(bodyParser.json())
app.use('/api/users', usersRoute)
app.use('/api/productDB', productRoute)
app.use('/api/orders', orderRoute)
// app.get('/api/products', (req, res) => {
// 	res.send(data.products)
// })
app.get('/api/paypal', (req, res) => {
	console.log(config.PAYPAL_CLIENT_ID)
	res.send({clientId: config.PAYPAL_CLIENT_ID})
})

app.listen('2000', () => {
	console.log('this service is hold on port: 2000')
})