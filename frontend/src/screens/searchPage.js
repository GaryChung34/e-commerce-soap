import React from 'react'


const SearchPage = ({ match }) => {
	const { searchString } = match.params

	return (
		<div>
			<h1>Search Result:</h1>
			<div>Searching: {searchString}</div>

		</div>
	)
}

export default SearchPage