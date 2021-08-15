import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../products/product.js'
import { fetchProducts } from '../products/productsSlice.js'
import { Link } from 'react-router-dom'


const ProductsList = () => {
	const products = useSelector(state => state.products.products)
	const dispatch = useDispatch()

	const productsList = products.map(product => (
		<Link to="" className="link-noDeco">
			<Product product={product}/>
		</Link>
	))

	// useEffect(
	// 	dispatch(fetchProducts())
	// )

	return (
		<div className='grid'>
			<div className='all-products'>
				{productsList}
			</div>
		</div>
	)
}

export default ProductsList