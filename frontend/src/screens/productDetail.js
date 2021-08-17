import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../cart/cartSlice.js'


const ProductDetail = ({ match }) => {
	const { productId } = match.params
	const [ qty, setQty ] = useState(0)
	const dispatch = useDispatch()

	const product = useSelector(state => 
		state.products.products.find(
			product => product.id === productId
		)
	)

	const onPlus = () => {
		setQty(qty + 1)
	}

	const onMinus = () => {
		if (qty > 0) {
			setQty(qty - 1)
		}
	}
	
	const onSubmit = () => {
		dispatch(addCart(
			{id: productId, quantity: qty}
		))
	}

	if (!productId) {
		return (
			<div>
				<h1>Product not found.</h1>
			</div>
		)
	}

	return (
		<div>
			<h1>Product Detail:</h1>
			<ul>
				<li>name: {product.name}</li>
				<li>price: {product.price.discount}</li>
				<li>id: {product.id}</li>
			</ul>
			<span style={{padding:'10px'}}>
				{qty}
			</span>
			<button style={{margin:'5px'}} onClick={onPlus}> + </button>
			<button style={{margin:'5px'}} onClick={onMinus}> - </button>
			<button style={{margin:'5px'}} onClick={onSubmit}>submit</button>
		</div>
	)
}

export default ProductDetail

