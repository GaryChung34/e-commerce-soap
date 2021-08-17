import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const NaviBar = () => {
	return (
		<header className="header">
      <div className="brand">
        <Link to="/">Simple Soap</Link>
      </div>
      <div className="header-link">
      	<div className="search-container">
	      	<form>
	      		<input type="text" placeholder="search...	" />
	      		<button>
	      			<FontAwesomeIcon icon={faSearch} 
	      				style={{color: "white"}}/>
	      		</button>
	      	</form>
      	</div>
      	<div className="search-container">
	      	<Link className="header-button" to='/Cart'>
	      		<FontAwesomeIcon icon={faShoppingCart} 
	      			style={{color: 'white', fontSize: '20px'}} />
	      		&nbsp;Cart
	      	</Link>
	        <Link className="header-button" to="/SignIn">
	        	Login
	        </Link>
        </div>
      </div>
    </header>
	)
}

export default NaviBar