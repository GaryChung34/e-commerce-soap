import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux'
import { removeCart } from '../feature/cart/cartSlice.js'


const CartItem = ({ product, qty }) => {
	const dispatch = useDispatch()

	const onCancel = () => {
		dispatch(removeCart(product._id))
	}

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
				<button onClick={onCancel}>
					<FontAwesomeIcon icon={faTimesCircle} />
				</button>
			</div>
		</div>
	)
}

export default CartItem