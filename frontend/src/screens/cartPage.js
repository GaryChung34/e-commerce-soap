import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../feature/cart/cartSlice.js'

import CartItem from '../components/cartItem.js'


const CartPage = (props) => {
	const cartItems = useSelector(state => state.cart.cart)
	const products = useSelector(state => state.products.products)
	const dispatch = useDispatch()


	const cartRender = cartItems.map(item => {
		const cartItem = products.find(product => product._id === item.id)

		return(
			<CartItem product={cartItem} qty={item.quantity} />
		)
	})

	const total = () => {
		let result = 0
		cartItems.map(item => {
			const cartItem = products.find(product => product._id === item.id)
			console.log(cartItem)
			result += parseFloat(cartItem.price.discount) * item.quantity
		})

		return result
	}

	const handleCheckout = () => {
		props.history.push('/signIn?redirect=/shipping')
	}

	return(
		<div className='cartList'>
			<h1>Cart: </h1>
			{cartRender}
			<h2>Total:&nbsp;${total()}</h2>
			<button onClick={handleCheckout}>Checkout</button>
		</div>
	)
}

export default CartPage