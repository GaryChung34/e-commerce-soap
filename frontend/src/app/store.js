import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from '../feature/products/productsSlice.js'
import CartReducer from '../feature/cart/cartSlice.js'
import UserReducer from '../feature/user/userSlice.js'
import OrdersReducer from '../feature/orders/ordersSlice.js'


export const store = configureStore({
	reducer: {
		products: ProductsReducer,
		cart: CartReducer,
		userSignin: UserReducer,
		ordersSlice: OrdersReducer
	},
})