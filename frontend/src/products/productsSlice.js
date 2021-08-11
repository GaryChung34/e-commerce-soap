import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const initialState = [
	{id: '1', name: 'soap 1', price: '40'},
	{id: '2', name: 'soap 2', price: '50'},
	{id: '3', name: 'soap 3', price: '60'}
]


const ProductsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {}
})


export default ProductsSlice.reducer