import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'


const initialState = {
	success: null,
	orderDetail: {
		address: {},
		payment: {},
		orderItems: []
	}
}

const getOrderDetail = createAsyncThunk('orders/getOrderDetail',
	async (orderId, { getState }) => {
		const { userSignin } = getState()
		const { data } = await Axios.get(`/api/orders/${orderId}`, 
			{headers: {authorization: 'Bearer ' + userSignin.token}}
		)
		return data
	}
)

const OrderDetail = createSlice({
	name: 'orderDetails',
	initialState,
	reducers: {},
	extraReducers: {
		[getOrderDetail.fulfilled]: (state, action) => {
			console.log(action.payload)
			state.success = true
			state.orderDetail = action.payload
		}
	}
})

export default OrderDetail.reducer
export { getOrderDetail }