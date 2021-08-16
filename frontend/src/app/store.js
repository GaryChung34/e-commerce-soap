import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from '../products/productsSlice.js'
import CartReducer from '../cart/cartSlice.js'


export const store = configureStore({
	reducer: {
		products: ProductsReducer,
		cart: CartReducer
	},
})