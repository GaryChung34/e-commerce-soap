import data from './data.js'
import express from 'express'
import dotenv from 'dotenv'
import config from './config.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'

import usersRoute from './routes/usersRoute.js'
import productRoute from './routes/productRoute.js'
import orderRoute from './routes/orderRoute.js'


console.log(config.MONGODB_URL)

const mongodbUrl = config.MONGODB_URL
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


// serve static assets if in production
if (process.env.NODE_ENV === 'production') {

	//use static file
	app.use(express.static('frontend/build'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	})
}


app.listen(process.env.PORT || '2000', () => {
	console.log('this service is hold on port: 2000 or env.port')
})