import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Payment = (props) => {
	const [ paymentMethod, setPaymentMethod ] = useState('')
	const dispatch = useDispatch()

	const handleContinue = () => {
		props.history.push('placeOrder')
	}

	return (
		<div>
			<h1>Payment Method:</h1>
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