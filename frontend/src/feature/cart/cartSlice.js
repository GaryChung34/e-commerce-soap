import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	cart: [],
	shipping: {},
	payment: {}
}

const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCart(state, action) {
			state.cart.push(action.payload)
		}, 

		removeCart(state, action) {
			const { id } = action.payload
			return state.cart.filter(item => item.id !== action.payload)		
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
