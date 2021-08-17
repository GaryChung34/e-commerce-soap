import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from '../feature/products/productsSlice.js'
import CartReducer from '../feature/cart/cartSlice.js'


export const store = configureStore({
	reducer: {
		products: ProductsReducer,
		cart: CartReducer
	},
})