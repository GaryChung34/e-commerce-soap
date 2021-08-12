import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

import Product from '../products/product.js'


const Home = () => {
  const products = useSelector(state => state.products)
  const homeProducts = products.slice(0, 4)
  const productsList = homeProducts.map(product => (
      <Product product={product} />
  ))

	return (
		<div className='grid'>
			<div className="center">
	      <img src="//placehold.it/1200x600" />
	    </div>

      <div className="heading">
        <h2>Favorites:</h2>
      </div>

      <div className="all-products">
        {productsList}
      </div>
  	</div>
  )
}

export default Home