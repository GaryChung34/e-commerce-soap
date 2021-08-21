import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Product from '../components/product.js'


const SearchPage = ({ match }) => {
	const { searchString } = match.params
	const products = useSelector(state => state.products.products)

	const searchList = products.filter(product => {
		const productName = product.name.toLowerCase()
		return ( 
			productName.includes(searchString) ||
			product.ingredients.includes(searchString)
		)
	})

	const showList = searchList.map(item => (
		<Link className='link-noDeco' to={`/product/${item.id}`}>
			<Product product={item} />
		</Link>
	))

	let renderList
	if (!searchList) {
		renderList = <h1>search not found.</h1>
	} else {
		renderList = (
			<div className='all-products'>
				{showList}
			</div>
		)
	}

	const { search } = window.location
	console.log('window location: ', search)

	return (
		<div>
			<h1>Search Result:</h1>
			<div>Searching: {searchString}</div>
			{renderList}
		</div>
	)
}

export default SearchPage