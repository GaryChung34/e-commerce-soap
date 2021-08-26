// import express from 'express'
import data from './data.js'
import express from 'express'

const app = express()


app.get('/api/products', (req, res) => {
	res.send(data.products)
})

app.listen('2000', () => {
	console.log('this service is hold on port: 2000')
})