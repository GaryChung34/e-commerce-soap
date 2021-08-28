import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
	userSignin: {}
}

export const fetchUserSignin = createAsyncThunk(
	'user/fetchUserSignin',
	async () => {
		const response = axios.post('/api/users/signIn', {
			name: payload.name,
			password: payload.password
		})
		return response.data
	}
)

const UserSlice = createSlice({
	name: 'userSignin',
	initialState,
	reducers: {},

	extreReducers: {
		[fetchUserSignin.fulfilled]: (state, action) => {
			state.userSignin = action.payload
		}
	}
})

export default UserSlice.reducer