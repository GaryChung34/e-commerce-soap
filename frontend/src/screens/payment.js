import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { savePayment } from '../feature/cart/cartSlice.js'


const Payment = (props) => {
	const [ paymentMethod, setPaymentMethod ] = useState('')
	const [ emptyWarn, setEmptyWarn ] = useState(false)
	const dispatch = useDispatch()

	const handleContinue = (e) => {
		e.preventDefault()
		if(paymentMethod!=='') {
			dispatch(savePayment({
				paymentMethod
			}))
			props.history.push('placeOrder')
		}
		else {
			setEmptyWarn(true)
		}
	}

	return (
		<div>
			<h1>Payment Method:</h1>
			{emptyWarn && <div style={{color: 'red'}}>There is/are empty field.</div>}
			<form onSubmit={handleContinue}>
				<ul>
					<li>
						<input type='radio' name='paymentMethod' id='paymentMethod' 
							value='paypal'
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
						<label>Paypal</label>
					</li>
					<li>
						<button type='submit'>continue</button>
					</li>
				</ul>
			</form>
		</div>
	)
}

export default Payment