import React, { useState } from 'react'


const Shipping = () => {
	const [ address, setAddress ] = useState('')
	const [ city, setCity ] = useState('')
	const [ pCode, setPCode ] = useState('')
	const [ country, setCountry ] = useState('')


	return (
		<div>
			<h1>Shipping Detail</h1>
			<form>
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
						<button>Submit</button>
					</li>
				</ul>
			</form>
		</div>
	)
}

export default Shipping