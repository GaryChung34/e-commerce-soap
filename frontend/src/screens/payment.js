import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savePayment } from '../feature/cart/cartSlice.js'


const Payment = (props) => {
	const [ paymentMethod, setPaymentMethod ] = useState('')
	const [ emptyWarn, setEmptyWarn ] = useState(false)

	const payment = useSelector(state => state.cart.payment)
	const dispatch = useDispatch()
	const queryStr = props.location.search


	if (payment.paymentMethod && !queryStr) {
		props.history.push('placeOrder')
	}

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

	useEffect(() => {
		setPaymentMethod(payment.paymentMethod)
	}, [])

	return (
		<div>
			<h1>Payment Method:</h1>
			{emptyWarn && <div style={{color: 'red'}}>There is/are empty field.</div>}
			<form onSubmit={handleContinue}>
				<ul>
					<li>
						<input type='radio' name='paymentMethod' id='method1' 
							value='paypal' checked={paymentMethod==='paypal'}
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
						<label>Paypal</label>
					</li>
					<li>
						<input type='radio' name='paymentMethod' id='method2' 
							value='None' checked={paymentMethod==='None'}
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
						<label>None</label>
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