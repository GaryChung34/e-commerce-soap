import React, { useState, useEffect } from 'react'
import CheckoutStep from '../components/checkoutStep.js'
import { useDispatch, useSelector } from 'react-redux'
import { saveShipping } from '../feature/cart/cartSlice.js'


const Shipping = (props) => {
	const [ address, setAddress ] = useState('')
	const [ building, setBuilding ] = useState('')
	const [ roadNo, setRoadNo ] = useState('')
	const [ district, setDistrict ] = useState('')
	const [ emptyWarn, setEmptyWarn ] = useState(false)

	const shipping = useSelector(state => state.cart.shipping)
	const dispatch = useDispatch()
	const queryStr = props.location.search


	if (shipping.address && !queryStr) {
		props.history.push('payment')
	}

	const handleContinue = (e) => {
		e.preventDefault()
		if(address!=='' && building!=='' && roadNo!=='' && district!=='') {
			dispatch(saveShipping({
				address,
				building,
				roadNo,
				district
			}))
			props.history.push('payment')
		} 
		else {
			setEmptyWarn(true)
		}
	}

	const fetchShipping = () => {
		setAddress(shipping.address)
		setBuilding(shipping.building)
		setRoadNo(shipping.roadNo)
		setDistrict(shipping.district)
	}

	useEffect(() => {
		fetchShipping()
	}, [])

	return (
		<div>
			<h1>Shipping Detail</h1>
			<CheckoutStep step1 step2 />
			{emptyWarn && <div style={{color: 'red'}}>There is/are empty field.</div>}
			<form onSubmit={handleContinue}>
				<ul>
					<li>
						<label>Address:</label>
					</li>
					<li>
						<input type='text' onChange={(e) => setAddress(e.target.value)} value={address} />
					</li>
					<li>
						<label>Building:</label>
					</li>
					<li>
						<input type='text' onChange={(e) => setBuilding(e.target.value)} value={building} />
					</li>
					<li>
						<label>Road no.:</label>
					</li>
					<li>
						<input type='text' onChange={(e) => setRoadNo(e.target.value)} value={roadNo} />
					</li>
					<li>
						<label>District:</label>
					</li>
					<li>
						<input type='text' onChange={(e) => setDistrict(e.target.value)} value={district} />
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