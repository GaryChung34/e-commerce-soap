import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../cart/cartSlice.js'


const Cart = () => {
	const cartItems = useSelector(state => state.cart)
	const products = useSelector(state => state.products.products)
	const dispatch = useDispatch()

	const handleAddS1 = () => {
		dispatch(addCart({
			id: "s1", 
			quantity: 2
		}))
	}

	const handleAddS2 = () => {
		dispatch(addCart({
			id: "s2", 
			quantity: 1
		}))
	}

	const cartRender = cartItems.map(item => {
		const cartItem = products.find(product => product.id === item.id)

		return(
			<li>
				name:{cartItem.name}&nbsp;id:{cartItem.id}&nbsp;price:{cartItem.price.discount}
			</li>
		)
	})

	return(
		<div>
			<button onClick={handleAddS1}>S1</button>
			<button onClick={handleAddS2}>S2</button>
			<h1>Cart: </h1>
			<ul>
				{cartRender}
			</ul>
		</div>
	)
}

export default Cart