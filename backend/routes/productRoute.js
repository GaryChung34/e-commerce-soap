import express from 'express'
import Product from '../models/productModel.js'
import { isAdmin, isAuth } from '../util.js'


const route = express.Router()

route.get('/', async (req, res) => {
	const products = await Product.find({})
	res.send(products)
})

route.post('/', isAuth, isAdmin, async (req, res) => {
	const product = new Product({
		name: req.body.name,
		star: req.body.star,
		image: req.body.image,
		price: req.body.price,
		ingredients: req.body.price.ingredients
	})
	const newProduct = await product.save()

	if(newProduct) {
		res.status(201).send({msg: 'Create product success.', data: newProduct})
	} else {
		res.status(500).send({msg: 'fail in creating product.'})
	}
})

export default route