import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	cart: [],
	shipping: {
		address: '',
		building: '',
		roadNo: '',
		district: ''
	},
	payment: {
		paymentMethod: ''
	}
}

const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCart(state, action) {
			state.cart.push(action.payload)
		}, 

		removeCart(state, action) {
			const id = action.payload
			state.cart = state.cart.filter(item => item.id !== id)		
		},

		saveShipping(state, action) {
			state.shipping = action.payload
		},

		savePayment(state, action) {
			state.payment = action.payload
		}
	}
})

export default CartSlice.reducer
export const { addCart, 
	removeCart,
	saveShipping,
	savePayment } = CartSlice.actions
