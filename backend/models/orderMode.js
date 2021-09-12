import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
	address: {
		address: {type: String, required: true},
		buidling: {type: String, required: true},
		roadNo: {type: String, required: true},
		district: {type: String, required: true},
	},
	payment: {
		paymentMethod: {type: String, required: true}
	},
	orderItem: [
		{
			Name: {type: String, required: true},
			id: {type: mongoose.Schema.Types.ObjectId,
				ref: 'Product', 
				required: true
			}
			quantity: {type: Number, required: true},
			price: {type: String, required: true}
		}
	],
	userId: {type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
	totalPrice: {type: String, required: true},
	shippingPrice: {type: String, required: true},
	isPaid: {type: Boolean, required: true},
	isDelivered: {type: Boolean, required: true}
})

const OrderModel = mongoose.model('Order', orderSchema)

