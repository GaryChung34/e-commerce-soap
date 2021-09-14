import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from '../feature/products/productsSlice.js'
import CartReducer from '../feature/cart/cartSlice.js'
import UserReducer from '../feature/user/userSlice.js'
import OrderCreateReducer from '../feature/orders/orderCreateSlice.js'


export const store = configureStore({
	reducer: {
		products: ProductsReducer,
		cart: CartReducer,
		userSignin: UserReducer,
		orderCreate: OrderCreateReducer
	},
})