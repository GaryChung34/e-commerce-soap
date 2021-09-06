import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
	products: []
}

const fetchProducts = createAsyncThunk('products/fetchProducts', 
	async () => { 
		const response = await axios.get('/api/productDB')
		return response.data
	})

const addProduct = createAsyncThunk('products/addProduct', 
	async (newProduct, { getState }) => {
		if(newProduct.id){
			const { userSignin } = getState()
			const { data } = await axios.put(`/api/productDB/${newProduct.id}`,
				newProduct,
				{headers: {authorization: 'Bearer ' + userSignin.userSignin.token}}
			)
			return data
		} 
		else {
			const { userSignin } = getState()
			const { data } = await axios.post('/api/productDB',
				newProduct,
				{headers: {authorization: 'Bearer ' + userSignin.userSignin.token}}
			)
			return data
		}
	}
)

const removeProduct = createAsyncThunk('products/removeProdcut', 
	async (productId, { getState }) => {
		const { userSignin } = getState()
		const { data } = await axios.delete(`/api/productDB/${productId}`, 
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
			state.products = action.payload
		},
		[addProduct.fulfilled]: (state, action) => {
			console.log('create/ update successful.')
			console.log(action.payload)
		}
	}
})


export default ProductsSlice.reducer
export { fetchProducts, addProduct, removeProduct }