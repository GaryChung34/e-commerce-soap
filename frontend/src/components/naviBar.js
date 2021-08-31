import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import SearchBar from './searchBar.js'


const NaviBar = () => {
	const userSignin = useSelector(state => state.userSignin.userSignin)

	return (
		<header className="header">
      <div className="brand">
        <Link to="/">Simple Soap</Link>
      </div>
      <div className="header-link">
      	<SearchBar />
      	<div className="search-container">
	      	<Link className="header-button" to='/Cart'>
	      		<FontAwesomeIcon icon={faShoppingCart} 
	      			style={{color: 'white', fontSize: '20px'}} />
	      		&nbsp;Cart
	      	</Link>
	      	{
	      		(userSignin)? (
		      		<Link className="header-button">
		      			{userSignin.name}
		      		</Link>
	      		) : (
			        <Link className="header-button" to="/SignIn">
			        	Login
			        </Link>
		      	)
	      	}
        </div>
      </div>
    </header>
	)
}

export default NaviBar