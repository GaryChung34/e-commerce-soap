import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const SearchBar = () => {
	const [ searchString , setSearchString ] = useState('')

	const onSearchChange = (e) => {
		setSearchString(e.target.value)
	}

	return (
		<div className="search-container">
    	<form>
    		<input type="text" placeholder="search...	" onChange={onSearchChange} />
    		<Link className="search-button" to={`/search/${searchString}`}>
    			<FontAwesomeIcon icon={faSearch} 
    				style={{color: "white"}}/>
    		</Link>
    	</form>
  	</div>
	)
}

export default SearchBar