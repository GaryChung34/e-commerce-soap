import React from 'react'
import { useSelector } from 'react-redux'


const SearchPage = ({ match }) => {
	const { searchString } = match.params
	const products = useSelector(state => state.products.products)

	const searchList = products.filter(product => {
		
	})



	return (
		<div>
			<h1>Search Result:</h1>
			<div>Searching: {searchString}</div>

		</div>
	)
}

export default SearchPage