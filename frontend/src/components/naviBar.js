import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { removeUser } from '../feature/user/userSlice.js'
import SearchBar from './searchBar.js'


const NaviBar = (props) => {
	const userSignin = useSelector(state => state.userSignin.userSignin)
	const dispatch = useDispatch()

	const handleLogOut = () => {
		dispatch(removeUser())
		// props.history.push('/')
	}

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
	      	{userSignin &&
	      		<button className="header-button" onClick={handleLogOut}>
	      			Log out
	      		</button>
	      	}
        </div>
      </div>
    </header>
	)
}

export default NaviBar