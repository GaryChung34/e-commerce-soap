import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../components/cartItem.js'
import { cartTotalPrice } from './cartPage.js'
import CheckoutStep from '../components/checkoutStep.js'
import { createOrder } from '../feature/orders/ordersSlice.js'


const PlaceOrder = (props) => {
	const shipping = useSelector(state => state.cart.shipping)
	const payment = useSelector(state => state.cart.payment)
	const cartItems = useSelector(state => state.cart.cart)
	const products = useSelector(state => state.products.products)
	const { userSignin } = useSelector(state => state.userSignin)

	const [ deliveryFee, setDeliveryFee ] = useState('10')
	const dispatch = useDispatch()

	const totalFee = cartTotalPrice(cartItems, products)

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

	const handlePlaceOrder = () => {
		dispatch(createOrder({
			address: shipping,
			payment: payment,
			orderItems: cartItems,
			userId: userSignin._id, 
			totalPrice: totalFee,
			shippingPrice: deliveryFee,
			isPaid: false,
			isDelivered: false
		}))
	}

	return (
		<div>
			<h1>Place Order:</h1>
			<CheckoutStep step1 step2 step3 step4 />
			<h2>Shipping Address:</h2>
			<div>
			{shipping.address},&nbsp; 
			{shipping.building},&nbsp; 
			{shipping.roadNo},&nbsp; 
			{shipping.district}
			</div>
			<button onClick={handleAddressEdit}>Edit</button>

			<h2>Payment Method:</h2>
			<div>{payment.paymentMethod}</div>
			<button onClick={handlePaymentEdit}>Edit</button>

			<h2>Order Item:</h2>
			{cartRender}

			<h2>Order Summary:</h2>
			<div>Items: ${totalFee}</div>
			<div>Delivery fee: ${deliveryFee}</div>
			<button onClick={handlePlaceOrder}>Purchase Order</button>

		</div>
	)
}

export default PlaceOrder