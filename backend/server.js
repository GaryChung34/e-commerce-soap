import data from './data.js'
import express from 'express'
import dotenv from 'dotenv'
import config from './config.js'
import mongoose from 'mongoose'
import usersRoute from './routes/usersRoute.js'


dotenv.config()
const mongodbUrl = config.MONGODB_URL
mongoose.connect(mongodbUrl, {
	useNewUrlParser: true
}).catch(error => console.log(error.reason))
console.log('connect mongo successful')


const app = express()

app.use('/api/users', usersRoute)
app.get('/api/products', (req, res) => {
	res.send(data.products)
})

app.listen('2000', () => {
	console.log('this service is hold on port: 2000')
})