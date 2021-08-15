import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NaviBar = () => {
	return (
		<header className="header">
      <div className="brand">
        <Link to="/">Simple Soap</Link>
      </div>
      <div className="header-link">
      	<form>
      		<input type="text" />
      	</form>
      	<Link className="header-button">
      		<FontAwesomeIcon icon={faShoppingCart} 
      			style={{color: 'white', fontSize: '20px'}} />
      		&nbsp;Cart
      	</Link>
        <Link className="header-button">
        	Login
        </Link>
      </div>
    </header>
	)
}

export default NaviBar