import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../feature/products/productsSlice.js'


const ManageItem = (props) => {
	const products = useSelector(state => state.products.products)

	const [ name, setName ] = useState('') 
	const [ star, setStar ] = useState('') 
	const [ image, setImage ] = useState('') 
	const [ origin, setOrigin ] = useState('')
	const [ discount, setDiscount ] = useState('') 
	const [ ingredient1, setIngredient1 ] = useState('') 
	const [ ingredient2, setIngredient2 ] = useState('') 
	const [ ingredient3, setIngredient3 ] = useState('') 

	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()

		const ingredients = [ingredient1, ingredient2, ingredient3].filter(
			ingredient => ingredient !== ''
		)
		dispatch(addProduct({name, star, image,
			price: {
				origin,
				discount
			},
			ingredients: ingredients
		}))
	}

	return (
		<div>
			<h1>Manage Item</h1>
			<form onSubmit={handleSubmit}>
				<ul>
					<li>
						<label>name:</label>
					</li>
					<li>
						<input type='text' onChange={(e)=>{setName(e.target.value)}} />
					</li>
					<li>
						<label>star:</label>
					</li>
					<li>
						<input type='number' onChange={(e)=>{setStar(e.target.value)}} />
					</li>
					<li>
						<label>image:</label>
					</li>
					<li>
						<input type='text' onChange={(e)=>{setImage(e.target.value)}} />
					</li>
					<li>
						<label>Original price:</label>
					</li>
					<li>
						<input type='text' onChange={(e)=>{setOrigin(e.target.value)}} />
					</li>
					<li>
						<label>Discount price:</label>
					</li>
					<li>
						<input type='text' onChange={(e)=>{setDiscount(e.target.value)}} />
					</li>
					<li>
						<label>ingredient 1:</label>
					</li>
					<li>
						<input type='text' onChange={(e)=>{setIngredient1(e.target.value)}} />
					</li>
					<li>
						<label>ingredient 2:</label>
					</li>
					<li>
						<input type='text' onChange={(e)=>{setIngredient2(e.target.value)}} />
					</li>
					<li>
						<label>ingredient 3:</label>
					</li>
					<li>
						<input type='text' onChange={(e)=>{setIngredient3(e.target.value)}} />
					</li>
					<button type='submit'>Submit</button>
				</ul>
			</form>
		</div>
	)
}

export default ManageItem