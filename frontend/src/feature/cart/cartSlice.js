import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const initialState = []

const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCart(state, action) {
			state.push(action.payload)
		}
	}
})

export default CartSlice.reducer
export const { addCart } = CartSlice.actions
