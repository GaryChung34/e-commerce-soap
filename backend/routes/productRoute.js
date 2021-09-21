import express from 'express'
import Product from '../models/productModel.js'
import { isAdmin, isAuth } from '../util.js'
import babelPolyFill from 'babel-polyfill'


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
		ingredients: req.body.ingredients
	})

	const newProduct = await product.save()
	console.log("post method")
	if(newProduct) {
		res.status(201).send({msg: 'Create product success.', data: newProduct})
	} else {
		res.status(500).send({msg: 'fail in creating product.'})
	}
})

route.put('/:id', isAuth, isAdmin, async (req, res) => {
	const id = req.params.id
	const product = await Product.findById(id)

	if (product) {
		product.name = req.body.name
		product.star = req.body.star
		product.image = req.body.image
		product.price = req.body.price
		product.ingredients = req.body.ingredients

		const savedProduct = await product.save()
		console.log('put method.')
		if (savedProduct) {
			res.status(200).send({msg: 'upate item successfully.', data: savedProduct})
		} else {
			res.status(404).send({msg: 'upatd item fail.'})
		}
	}
	res.status(500).send({msg: 'item not found.'})
})

route.delete('/:id', async(req, res) => {
	const productId = req.params.id
	const product = await Product.findById(productId)

	if(product) {
		await product.remove()
		res.send({msg: 'remove success.'})
	}
	else {
		res.send({msg: 'remove failed.'})
	}
})

// route.delete(

// )

export default route