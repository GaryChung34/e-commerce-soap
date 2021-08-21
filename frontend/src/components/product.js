import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export const showStar = (rank) => {
  let renderStar = []

  for (let x = 0; x < rank; x++) {
    renderStar.push(
      <FontAwesomeIcon style={{color: 'gold'}} icon={faStar} />
    ) 
  }
  for (let x = 0; x < (5-rank); x++) {
    renderStar.push(
      <FontAwesomeIcon style={{color: 'lightgray'}} icon={faStar} />
    ) 
  }
  return renderStar
}

export const showIngredient = (ingredientsList) => {
  let ingredients = []

  for (let x in ingredientsList) {
    ingredients.push(
      <Link to={`/search/${ingredientsList[x]}`} className='link-inde'>
        <FontAwesomeIcon icon={faSeedling} />
        <span>{ingredientsList[x]}</span>
      </Link>,
      <span>&nbsp;&nbsp;</span>
    )
  }
  return ingredients
}

const Product = ({ product }) => {
  let ingredients = []

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
        {showStar(product.star)}
      </div>
      <div style={{textDecoration:'line-through', color:'black'}}>
        ${product.price.origin}
      </div>
      <div style={{color:'crimson', fontSize:'1.5rem', fontWeight:'900', textDecoration: 'none'}}>
        ${product.price.discount}
      </div>
      <div>
        {showIngredient(product.ingredients)}
      </div>
    </div>
	)
}

export default Product