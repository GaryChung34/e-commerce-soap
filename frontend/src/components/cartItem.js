import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'


const CartItem = ({ product, qty }) => {
	console.log(qty)
	return(
		<div className='cartItem'>
			<div style={{display:'flex', alignItems:'center'}}>
				<img src={product.image} alt={product.name} />
				<h2>
					{product.name}
				</h2>
			</div>

			<div>
				<span>Qty:&nbsp;{qty}</span>
				<span>${product.price.discount*qty}</span>
				<button><FontAwesomeIcon icon={faTimesCircle} /></button>
			</div>
		</div>
	)
}

export default CartItem