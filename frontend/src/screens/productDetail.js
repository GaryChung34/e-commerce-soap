import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../feature/cart/cartSlice.js'
import { Link } from 'react-router-dom'


const ProductDetail = ({ match }) => {
	const { productId } = match.params
	const [ qty, setQty ] = useState(0)
	const dispatch = useDispatch()

	const product = useSelector(state => 
		state.products.products.find(
			product => product.id === productId
		)
	)

	const onPlus = () => {
		setQty(qty + 1)
	}

	const onMinus = () => {
		if (qty > 0) {
			setQty(qty - 1)
		}
	}
	
	const onSubmit = () => {
		dispatch(addCart(
			{id: productId, quantity: qty}
		))
	}

	if (!productId) {
		return (
			<div>
				<h1>Product not found.</h1>
			</div>
		)
	}

	return (
		<div className='productDetail'>
			{/*<h1>Product Detail:</h1>
			<ul>
				<li>name: {product.name}</li>
				<li>price: {product.price.discount}</li>
				<li>id: {product.id}</li>
			</ul>
			<span style={{padding:'10px'}}>
				{qty}
			</span>
			<button style={{margin:'5px'}} onClick={onPlus}> + </button>
			<button style={{margin:'5px'}} onClick={onMinus}> - </button>
			<button style={{margin:'5px'}} onClick={onSubmit}>submit</button>*/}
			<div className='productAddress'>
				<Link to='/'>Home</Link>
				&nbsp;>&nbsp; 
				<Link to='/productsList'>Product</Link>
				&nbsp;>&nbsp;{product.name}
			</div>
			<div style={{backgroundColor:'white', 
				textAlign:'center', 
				padding:'1rem 0px'}}>
				<img src={product.image} alt={product.name} 
					style={{width:'350px', height:'400px',
						objectFit:'cover'}} />
			</div>
			<div style={{backgroundColor:'white',
				padding:'1rem 2rem'}}>
				<h1 style={{margin:'10px 0px'}}>{product.name}</h1>
				<h2 style={{margin:'5px 0px'}}>Body Soap</h2>
				<p style={{margin:'15px 0px'}}>
					This recipe for a handsome, heavenly-scented cold process soap is ideal for a beginner to tackle. From this recipe, you can learn how to use other additives. A base of coconut, canola, castor, sesame oil, Shea, and kokum butter is blended with lime, vetiver, and cedarwood essential oils. The result is a smokey marbled soap with distinctive and deeply masculine scents that you'd find in the most delicious men's colognes. Make a batch for gifting the men in your life.
				</p>
			</div>
		</div>
	)
}

export default ProductDetail

