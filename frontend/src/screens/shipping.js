import React, { useState } from 'react'
import CheckoutStep from '../components/checkoutStep.js'
import { useDispatch } from 'react-redux'
import { saveShipping } from '../feature/cart/cartSlice.js'


const Shipping = (props) => {
	const [ address, setAddress ] = useState('')
	const [ city, setCity ] = useState('')
	const [ pCode, setPCode ] = useState('')
	const [ country, setCountry ] = useState('')
	const [ emptyWarn, setEmptyWarn ] = useState(false)
	const dispatch = useDispatch()

	const handleContinue = (e) => {
		e.preventDefault()
		if(address!=='' && city!=='' && pCode!=='' && country!=='') {
			dispatch(saveShipping({
				address,
				city,
				pCode,
				country
			}))
			props.history.push('payment')
		} 
		else {
			setEmptyWarn(true)
		}
	}

	return (
		<div>
			<h1>Shipping Detail</h1>
			<CheckoutStep step1 step2/>
			{emptyWarn && <div style={{color: 'red'}}>There is/are empty field.</div>}
			<form onSubmit={handleContinue}>
				<ul>
					<li>
						<label>Address:</label>
					</li>
					<li>
						<input type='text' onChange={(e) => setAddress(e.target.value)} />
					</li>
					<li>
						<label>City:</label>
					</li>
					<li>
						<input type='text' onChange={(e) => setCity(e.target.value)} />
					</li>
					<li>
						<label>Postal code:</label>
					</li>
					<li>
						<input type='text' onChange={(e) => setPCode(e.target.value)} />
					</li>
					<li>
						<label>Country:</label>
					</li>
					<li>
						<input type='text' onChange={(e) => setCountry(e.target.value)} />
					</li>
					<li>
						<button type='submit'>Submit</button>
					</li>
				</ul>
			</form>
		</div>
	)
}

export default Shipping