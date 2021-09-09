import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/cartItem.js'
import { cartTotalPrice } from './cartPage.js'


const PlaceOrder = (props) => {
	const shipping = useSelector(state => state.cart.shipping)
	const { paymentMethod } = useSelector(state => state.cart.payment)
	const cartItems = useSelector(state => state.cart.cart)
	const products = useSelector(state => state.products.products)
	const [ deliveryFee, setDeliveryFee ] = useState('10')


	const cartRender = cartItems.map(item => {
		const cartItem = products.find(product => product._id === item.id)

		return(
			<CartItem product={cartItem} qty={item.quantity} />
		)
	})

	const handleAddressEdit = () => {
		props.history.push('shipping?from=edit')
	}

	const handlePaymentEdit = () => {
		props.history.push('payment?from=edit')
	}

	return (
		<div>
			<h1>Place Order:</h1>
			<h2>Shipping Address:</h2>
			<div>
			{shipping.address},&nbsp; 
			{shipping.building},&nbsp; 
			{shipping.roadNo},&nbsp; 
			{shipping.district}
			</div>
			<button onClick={handleAddressEdit}>Edit</button>

			<h2>Payment Method:</h2>
			<div>{paymentMethod}</div>
			<button onClick={handlePaymentEdit}>Edit</button>

			<h2>Order Item:</h2>
			{cartRender}

			<h2>Order Summary:</h2>
			<div>Items: ${cartTotalPrice(cartItems, products)}</div>
			<div>Delivery fee: ${deliveryFee}</div>
			<button>Purchase Order</button>

		</div>
	)
}

export default PlaceOrder