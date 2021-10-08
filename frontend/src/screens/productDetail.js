import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../feature/cart/cartSlice.js'
import { Link } from 'react-router-dom'
import { showStar, showIngredient } from '../components/product.js'


const ProductDetail = ({ match }) => {
	const { productId } = match.params
	const [ qty, setQty ] = useState(1)
	const dispatch = useDispatch()

	const product = useSelector(state => 
		state.products.products.find(
			product => product._id === productId
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
			<div className='productAddress'>
				<Link to='/'>Home</Link>
				&nbsp;>&nbsp; 
				<Link to='/productsList'>Product</Link>
				&nbsp;>&nbsp;{product.name}
			</div>
			<div style={{textAlign:'center', 
				padding:'1rem 0px'}}
				className='bg-gray-50'>
				<img src={product.image} alt={product.name} 
					style={{width:'350px', height:'400px',
						objectFit:'cover'}} />
			</div>
			<div style={{padding:'1rem 2rem'}} className='bg-gray-50'>
				<h1 style={{margin:'10px 0px'}}>{product.name}</h1>
				<h2 style={{margin:'5px 0px'}}>Body Soap</h2>
				<div>{showStar(product.star)}</div>
				<p style={{margin:'20px 0px'}}>
					This recipe for a handsome, heavenly-scented cold process soap is ideal for a beginner to tackle. From this recipe, you can learn how to use other additives. A base of coconut, canola, castor, sesame oil, Shea, and kokum butter is blended with lime, vetiver, and cedarwood essential oils. The result is a smokey marbled soap with distinctive and deeply masculine scents that you'd find in the most delicious men's colognes. Make a batch for gifting the men in your life.
				</p>
				<h3>Herbs Ingredient</h3>
				<p className='detail-link'>{showIngredient(product.ingredients)}</p>
				<h3>Order Now</h3>
				<div style={{textAlign:'center', margin:'20px'}}>
					<div className='qty-container'>
						<button className='plus-button' onClick={onMinus}>-</button>
						<div className='qty-box bg-gray-50'>{qty}</div>
						<button className='plus-button' onClick={onPlus}>+</button>
					</div>
				</div>
				<div style={{textAlign:'center', margin:'20px'}}>
					<button className='addCart' onClick={onSubmit}>Add Cart</button>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail

