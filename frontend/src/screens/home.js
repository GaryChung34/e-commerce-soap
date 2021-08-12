import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSeedling } from '@fortawesome/free-solid-svg-icons'

import Product from '../products/product.js'

const p0 = {
  name: "Earthy Blend", 
  star: 4,
  image: "images/soap1.jpg",
  price: {
    origin: "$90.50",
    discount: "$45.90"
  },
  ingredients: ["vanilla", "basil"]
}

const p1 = {
  name: "Gummy Soap", 
  star: 3,
  image: "images/soap2.png",
  price: {
    origin: "$100.00",
    discount: "$50.00"
  },
  ingredients: ["anise", "borage"]
}

const p2 = {
  name: "Carved Crystal", 
  star: 5,
  image: "images/soap3.jpg",
  price: {
    origin: "$60.50",
    discount: "$40.90"
  },
  ingredients: ["caraway"]
}

const Home = () => {

	return (
		<div className='grid'>
			<div className="center">
	      <img src="//placehold.it/1200x600" />
	    </div>

      <div className="heading">
        <h2>Favorites:</h2>
      </div>

      <div className="all-products">
        <Product product={p0} />
        <Product product={p1} />
        <Product product={p2} />
      </div>
  	</div>
  )
}

export default Home