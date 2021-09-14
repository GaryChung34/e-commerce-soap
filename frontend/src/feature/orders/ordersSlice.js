import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'


const initialState = {} 

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
			state = {
				success: true,
				order: action.payload
			}
		}
	}
})


export default OrderSlice.reducer
export { createOrder }