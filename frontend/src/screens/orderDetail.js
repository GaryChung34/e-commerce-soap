import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../components/cartItem.js'
import { getOrderDetail } from '../feature/orders/orderDetailSlice.js'


const OrderDetail = ({ match }) => {
	const { orderId } = match.params
	const products = useSelector(state => state.products.products)
	const orderDetail = useSelector(state => state.orderDetail.orderDetail)
	const { address, payment, orderItems } = orderDetail

	const dispatch = useDispatch()


	const cartRender = orderItems.map(item => {
		const cartItem = products.find(product => product._id === item.id)
		return(
			<CartItem product={cartItem} qty={item.quantity} />
		)
	})

	useEffect(() => {
		dispatch(getOrderDetail(orderId))
	}, [])


	return (
		<div>
			<h1>OrderDetail</h1>
			<h2>Order no.: {orderDetail._id}</h2>
			<h2>Shipping Address:</h2>
			<div>
			{address.address},&nbsp; 
			{address.building},&nbsp; 
			{address.roadNo},&nbsp; 
			{address.district}
			</div>

			<h2>Payment Method:</h2>
			<div>{payment.paymentMethod}</div>

			<h2>Order Item:</h2>
			{cartRender}

			<h2>Order Summary:</h2>
			<div>Items: ${orderDetail.totalPrice}</div>
			<div>Delivery fee: ${orderDetail.shippingPrice}</div>
		</div>
	)
}

export default OrderDetail
