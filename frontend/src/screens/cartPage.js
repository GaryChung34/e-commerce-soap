import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../feature/cart/cartSlice.js'

import CartItem from '../components/cartItem.js'


const CartPage = () => {
	const cartItems = useSelector(state => state.cart)
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

	return(
		<div className='cartList'>
			<h1>Cart: </h1>
			{cartRender}
			<h2>Total:&nbsp;${total()}</h2>
		</div>
	)
}

export default CartPage