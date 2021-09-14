import mongoose from 'mongoose'

const orderItem = new mongoose.Schema({
	id: { 
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Product',
		required: true,
	},
	quantity: {type: Number, required: true},
}, {_id: false})

const orderSchema = new mongoose.Schema({
	address: {
		address: {type: String, required: true},
		building: {type: String, required: true},
		roadNo: {type: String, required: true},
		district: {type: String, required: true},
	},
	payment: {
		paymentMethod: {type: String, required: true}
	},

	orderItems: [orderItem],
	
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},

	totalPrice: {type: String, required: true},
	shippingPrice: {type: String, required: true},
	isPaid: {type: Boolean, required: true, default: false},
	isDelivered: {type: Boolean, required: true, default: false}
})

const OrderModel = mongoose.model('Order', orderSchema)

export default OrderModel

