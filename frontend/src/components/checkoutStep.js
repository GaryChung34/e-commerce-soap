import React from 'react'


const CheckoutStep = (props) => {
	const signinTab = props.step1? 'active' : ''
	const shippingTab = props.step2? 'active' : ''
	const paymentTab = props.step3? 'active' : ''
	const orderTab = props.step4? 'active' : ''


	return (
		<div className='checkoutStep'>
			<div className={signinTab}>Sign-in</div>
			<div className={shippingTab}>Shipping</div>
			<div className={paymentTab}>Payment</div>
			<div className={orderTab}>Place Order</div>
		</div>
	)
}

export default CheckoutStep