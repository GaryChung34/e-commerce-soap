import Order from '../models/orderModel.js'
import express from 'express'
import { isAdmin, isAuth } from '../util.js'


const route = express.Router()

route.post('/', async (req, res) => {
	const order = new Order({
		address: req.body.address,
		payment: req.body.payment,
		orderItem: req.body.orderItem,
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

export default route

