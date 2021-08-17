import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
	products: []
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', 
	async () => { 
		const response = await axios.get('/api/products')
		return response.data
	})

const ProductsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},

	extraReducers: {
		[fetchProducts.fulfilled]: (state, action) => {
			state.products = state.products.concat(action.payload)
		}
	}
})


export default ProductsSlice.reducer