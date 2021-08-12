import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../products/product.js'


const ProductsList = () => {
	const products = useSelector(state => state.products)

	const productsList = products.map(product => (
		<Product product={product}/>
	))

	return (
		<div className='grid'>
			<div className='all-products'>
				{productsList}
			</div>
		</div>
	)
}

export default ProductsList