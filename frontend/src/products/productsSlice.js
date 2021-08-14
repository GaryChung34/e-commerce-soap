import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
	products: []
}
	// {
	// 	id: "s1",
	//   name: "Earthy Blend", 
	//   star: 4,
	//   image: "images/soap1.jpg",
	//   price: {
	//     origin: "$90.50",
	//     discount: "$45.90"
	//   },
	//   ingredients: ["vanilla", "basil"]
	// },

	// {
	// 	id: "s2",
	//   name: "Gummy Soap", 
	//   star: 3,
	//   image: "images/soap2.png",
	//   price: {
	//     origin: "$100.00",
	//     discount: "$50.00"
	//   },
	//   ingredients: ["anise", "borage"]
	// },

	// {
	// 	id: "s3",
	//   name: "Carved Crystal", 
	//   star: 5,
	//   image: "images/soap3.jpg",
	//   price: {
	//     origin: "$60.50",
	//     discount: "$40.90"
	//   },
	//   ingredients: ["caraway"]
	// }, 

	// {
	// 	id: "s4",
	//   name: "Candy Style", 
	//   star: 1,
	//   image: "images/soap4.jpg",
	//   price: {
	//     origin: "$55.50",
	//     discount: "$45.90"
	//   },
	//   ingredients: ["burnet", "mace"]
	// }, 

	// {
	// 	id: "s5",
	//   name: "Bath Bomb", 
	//   star: 2,
	//   image: "images/soap5.jpg",
	//   price: {
	//     origin: "$70.50",
	//     discount: "$65.50"
	//   },
	//   ingredients: ["rue", "sage", "dill"]
	// },

	// {
	// 	id: "s6",
	//   name: "Little Poppy", 
	//   star: 4,
	//   image: "images/soap6.jpg",
	//   price: {
	//     origin: "$70.50",
	//     discount: "$50.00"
	//   },
	//   ingredients: ["fenugreek"]
	// },

	// {
	// 	id: "s7",
	//   name: "Relax Spa", 
	//   star: 5,
	//   image: "images/soap7.jpg",
	//   price: {
	//     origin: "$70.50",
	//     discount: "$50.00"
	//   },
	//   ingredients: ["ginger", "hyssop"]
	// },

	// {
	// 	id: "s8",
	//   name: "Bath Bomb", 
	//   star: 4,
	//   image: "images/soap8.jpg",
	//   price: {
	//     origin: "$70.50",
	//     discount: "$65.50"
	//   },
	//   ingredients: ["rue"]
	// },

	// {
	// 	id: "s9",
	//   name: "Bath Bomb", 
	//   star: 5,
	//   image: "images/soap9.jpg",
	//   price: {
	//     origin: "$70.50",
	//     discount: "$50.50"
	//   },
	//   ingredients: ["sage", "dill"]
	// },

	// {
	// 	id: "s10",
	//   name: "Bath Bomb", 
	//   star: 4,
	//   image: "images/soap10.jpg",
	//   price: {
	//     origin: "$70.50",
	//     discount: "$60.50"
	//   },
	//   ingredients: ["cumin", "lovage"]
	// },

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