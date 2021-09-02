import mongoose from 'mongoose'


const productSchema = new mongoose.Schema({
	name: {type: String, required: true},
	star: {type: Number, required: true},
	image: {type: String, required: true},
	price: {
		origin: {type: String, required: true},
		discount: String
	},
	ingredients: [String]
})

const productModel = mongoose.model('Product', productSchema)

export default productModel