import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Product from '../components/product.js'


const Home = () => {
  const products = useSelector(state => state.products.products)
  const homeProducts = products.slice(0, 4)

  const productsList = homeProducts.map(product => (
    <Link to={`/product/${product._id}`} className="link-noDeco">
      <Product product={product} />
    </Link>
  ))

	return (
		<div className='grid'>
			<div className="center">
	      <img className="banner-image" 
          src="images/soap-banner.jpg" 
          alt="Soap-Banner-image" 
        />
	    </div>

      <div className="heading">
        <h2 className="text-xl">Favorites:</h2>
      </div>

      <div className="all-products" style={{flexWrap:'nowrap'}}>
        {productsList}
      </div>
  	</div>
  )
}

export default Home