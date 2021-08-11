import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from '../products/productsSlice.js'


export const store = configureStore({
	reducer: {
		products: ProductsReducer
	},
})