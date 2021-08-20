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
    		<label htmlFor='header-search' />
    		<input 
    			type="text" 
    			placeholder="search...	" 
    			onChange={onSearchChange}
    		/>
    		<Link to={`/search/${searchString}`}>
    			<button className="search-button" type='submit'>
    				<FontAwesomeIcon 
    					icon={faSearch} 
    					style={{color: "white"}} 
    				/>
    			</button>
    		</Link>
    		
    	</form>
  	</div>
	)
}

export default SearchBar