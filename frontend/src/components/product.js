import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Product = ({ product }) => {
  let renderStar = []
  let ingredients = []
  
  for (let x = 0; x < product.star; x++) {
    renderStar.push(
      <FontAwesomeIcon style={{color: 'gold'}} icon={faStar} />
    ) 
  }
  
  for (let x = 0; x < (5-product.star); x++) {
    renderStar.push(
      <FontAwesomeIcon style={{color: 'lightgray'}} icon={faStar} />
    ) 
  }

  for (let x in product.ingredients) {
    ingredients.push(
      <Link to='' className='link-inde'>
        <FontAwesomeIcon icon={faSeedling} />
        <span>{product.ingredients[x]}</span>
      </Link>,
      <span>&nbsp;&nbsp;</span>
    )
  }
  

	return(
		<div className="product" key={product.id}>
      <div className="center">
        <img className="product-image" src={product.image} alt={product.name} />
      </div>
      <div style={{fontSize: '1.5rem'}}>{product.name}</div>
      <div>
        {renderStar}
      </div>
      <div style={{textDecoration:'line-through', color:'black'}}>
        {product.price.origin}
      </div>
      <div style={{color:'crimson', fontSize:'1.5rem', fontWeight:'900', textDecoration: 'none'}}>
        {product.price.discount}
      </div>
      <div>
        {ingredients}
      </div>
    </div>
	)
}

export default Product