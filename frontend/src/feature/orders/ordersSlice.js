import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'


const initialState = {
	success: null,
	order: {}
} 

const createOrder = createAsyncThunk('orders/createOrder',
	async (newOrder, { getState }) => {
		const { userSignin } = getState()
		const { data } = await Axios.post('/api/orders/', newOrder, {
			headers: {authorization: 'Bearer ' + userSignin.token}
		})
		return data
	}
)

const OrderSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {},
	extraReducers: {
		[createOrder.fulfilled]: (state, action) => {
			console.log('run createOrder reducers.')
			state.success = true
			state.order = action.payload.data
		}
	}
})


export default OrderSlice.reducer
export { createOrder }