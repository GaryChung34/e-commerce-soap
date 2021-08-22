import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../components/product.js'
import { fetchProducts } from '../feature/products/productsSlice.js'
import { Link } from 'react-router-dom'


const ProductsList = () => {
	const products = useSelector(state => state.products.products)
	const dispatch = useDispatch()

	const productsList = products.map(product => (
		<Link to={`/product/${product.id}`} className="link-noDeco" key={product.id}>
			<Product product={product} />
		</Link>
	))

	return (
			<div className='all-products'>
				{productsList}
			</div>
	)
}

export default ProductsList