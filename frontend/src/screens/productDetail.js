import React from 'react'
import { useSelector } from 'react-redux'


const ProductDetail = ({ match }) => {
	const { productId } = match.params
	console.log(productId)

	const product = useSelector(state => 
		state.products.products.find(
			product => product.id === productId
		)
	)

	
	console.log(product)

	if (!productId) {
		return (
			<div>
				<h1>Product not found.</h1>
			</div>
		)
	}

	return (
		<div>
			<ul>
				<li>name: {product.name}</li>
				<li>price: {product.price.discount}</li>
				<li>id: {product.id}</li>
			</ul>
		</div>
	)
}

export default ProductDetail

