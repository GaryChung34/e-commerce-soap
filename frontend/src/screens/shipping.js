import React, { useState } from 'react'
import CheckoutStep from '../components/checkoutStep.js'


const Shipping = (props) => {
	const [ address, setAddress ] = useState('')
	const [ city, setCity ] = useState('')
	const [ pCode, setPCode ] = useState('')
	const [ country, setCountry ] = useState('')

	const handleContinue = () => {
		props.history.push('payment')
	}

	return (
		<div>
			<h1>Shipping Detail</h1>
			<CheckoutStep step1 step2/>
			<form onSubmit={handleContinue}>
				<ul>
					<li>
						<label>Address:</label>
					</li>
					<li>
						<input type='text' onClick={(e) => setAddress(e.target.value)} />
					</li>
					<li>
						<label>City:</label>
					</li>
					<li>
						<input type='text' onClick={(e) => setCity(e.target.value)}/>
					</li>
					<li>
						<label>Postal code:</label>
					</li>
					<li>
						<input type='text' onClick={(e) => setPCode(e.target.value)}/>
					</li>
					<li>
						<label>Country:</label>
					</li>
					<li>
						<input type='text' onClick={(e) => setCountry(e.target.value)}/>
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