import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../feature/products/productsSlice.js'


const ManageItem = (props) => {
	const products = useSelector(state => state.products.products)

	const [ id, setId ] = useState('')
	const [ name, setName ] = useState('') 
	const [ star, setStar ] = useState('') 
	const [ image, setImage ] = useState('') 
	const [ origin, setOrigin ] = useState('')
	const [ discount, setDiscount ] = useState('') 
	const [ ingredient1, setIngredient1 ] = useState('') 
	const [ ingredient2, setIngredient2 ] = useState('') 
	const [ ingredient3, setIngredient3 ] = useState('') 
	const [ modelVisible , setModelVisible ] = useState(false)

	const dispatch = useDispatch()

	const openModel = (product) => {
		setModelVisible(true)
		setId(product._id)
		setName(product.name)
		setStar(product.star)
		setImage(product.image)
		setOrigin(product.price.origin)
		setDiscount(product.price.discount)
		if(product.ingredients[0]){
			setIngredient1(product.ingredients[0])
		}
		if(product.ingredients[1]){
			setIngredient2(product.ingredients[1])
		}
		if(product.ingredients[2]){
			setIngredient3(product.ingredients[2])
		}
	}

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
			{modelVisible &&
				<form onSubmit={handleSubmit}>
					<ul>
						<li>
							<label>name:</label>
						</li>
						<li>
							<input type='text' onChange={(e)=>{setName(e.target.value)}} value={name}/>
						</li>
						<li>
							<label>star:</label>
						</li>
						<li>
							<input type='number' onChange={(e)=>{setStar(e.target.value)}} value={star}/>
						</li>
						<li>
							<label>image:</label>
						</li>
						<li>
							<input type='text' onChange={(e)=>{setImage(e.target.value)}} value={image}/>
						</li>
						<li>
							<label>Original price:</label>
						</li>
						<li>
							<input type='text' onChange={(e)=>{setOrigin(e.target.value)}} value={origin}/>
						</li>
						<li>
							<label>Discount price:</label>
						</li>
						<li>
							<input type='text' onChange={(e)=>{setDiscount(e.target.value)}} value={discount}/>
						</li>
						<li>
							<label>ingredient 1:</label>
						</li>
						<li>
							<input type='text' onChange={(e)=>{setIngredient1(e.target.value)}} value={ingredient1}/>
						</li>
						<li>
							<label>ingredient 2:</label>
						</li>
						<li>
							<input type='text' onChange={(e)=>{setIngredient2(e.target.value)}} value={ingredient2}/>
						</li>
						<li>
							<label>ingredient 3:</label>
						</li>
						<li>
							<input type='text' onChange={(e)=>{setIngredient3(e.target.value)}} value={ingredient3}/>
						</li>
						<button type='submit'>Submit</button>
						<button onClick={() => {setModelVisible(false)}}>Back</button>
					</ul>
				</form>
			}
			<table>
				<thead>
					<th>id</th>
					<th>name</th>
					<th>star</th>
					<th>original price</th>
					<th>discount price</th>
				</thead>
				<tbody>
				{
					products.map(product => (
						<tr>
							<td>{product._id}</td>
							<td>{product.name}</td>
							<td>{product.star}</td>
							<td>{product.price.origin}</td>
							<td>{product.price.discount}</td>
							<td>
								<button onClick={() => openModel(product)}>edit</button>
								<button>delete</button>
							</td>
						</tr>
					))
				}
				</tbody>
			</table>
		</div>
	)
}

export default ManageItem