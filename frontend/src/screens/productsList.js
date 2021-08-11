import React from 'react'
import { useSelector } from 'react-redux'


const ProductsList = () => {
	const products = useSelector(state => state.products)

	const productsList = products.map(product => (
		<li key={product.id}>
			<h2>Product: {product.name}, Price: {product.price}</h2>
		</li>
	))

	return (
		<div className='grid'>
			<ul className='heading'>
			{productsList}
			</ul>
		</div>
	)
}

export default ProductsList