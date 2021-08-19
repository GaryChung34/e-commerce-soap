import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const initialState = []

const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCart(state, action) {
			state.push(action.payload)
		}, 

		removeCart(state, action) {
			const { id } = action.payload
			return state.filter(item => item.id !== action.payload)
			
		}
	}
})

export default CartSlice.reducer
export const { addCart, removeCart } = CartSlice.actions
