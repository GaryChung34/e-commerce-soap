import Order from '../models/orderModel.js'
import express from 'express'
import { isAdmin, isAuth } from '../util.js'
import "babel-polyfill"


const route = express.Router()

route.post('/', async (req, res) => {
	const order = new Order({
		address: req.body.address,
		payment: req.body.payment,
		orderItems: req.body.orderItems,
		userId: req.body.userId,
		totalPrice: req.body.totalPrice,
		shippingPrice: req.body.shippingPrice,
		isPaid: req.body.isPaid,
		isDelivered: req.body.isDelivered
	})

	const newOrder = await order.save()
	if(newOrder) {
		res.status(201).send({msg: 'create order sucessful.', data: newOrder})
	} else {
		res.status(500).send({msg: 'Fail to create order.'})
	}
})

route.get('/:orderId', async (req, res) => {
	const orderId = req.params.orderId
	const order = await Order.findById(orderId)

	if(order) {
		console.log(order)
		res.send(order)
	} else {
		res.status(404).send({msg: 'order not found.'})
	}
})



export default route

