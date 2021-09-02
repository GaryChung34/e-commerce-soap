import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
	products: []
}

const fetchProducts = createAsyncThunk('products/fetchProducts', 
	async () => { 
		const response = await axios.get('/api/products')
		return response.data
	})

const addProduct = createAsyncThunk('products/addProduct', 
	async (newProduct, { getState }) => {
		const { userSignin } = getState()
		console.log(userSignin)
		const { data } = await axios.post('/api/productDB',
			newProduct,
			{headers: {authorization: 'Bearer ' + userSignin.userSignin.token}}
		)
		return data
	}
)


const ProductsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},

	extraReducers: {
		[fetchProducts.fulfilled]: (state, action) => {
			state.products = state.products.concat(action.payload)
		},
		[addProduct.fulfilled]: (state, action) => {
			console.log('create successful.')
			console.log(action.payload)
		}
	}
})


export default ProductsSlice.reducer
export { fetchProducts, addProduct }