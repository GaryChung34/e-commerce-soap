import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'


const initialState = {}

const getOrderDetail = createAsyncThunk('orders/getOrderDetail',
	async (orderId, { getState }) => {
		const { userSignin } = getState()
		const { data } = await Axios.get('/api/orders/', orderId, 
			{headers: {authorization: 'Bearer ' + userSignin.token}}
		)
	}
)

const OrderDetail = createSlice({
	name: 'orderDetails',
	initialState,
	reducers: {},
	extraReducers: {
		[getOrderDetails.fulfilled]: (state, action) => {
			state = {
				success: true,
				order: action.payload
			}
		}
	}
})

export default OrderDetail.reducer
export { getOrderDetail }