import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
	userSignin: {}
}

export const fetchUserSignin = createAsyncThunk(
	'user/fetchUserSignin',
	async (userInfo) => {
		const response = await axios.post('/api/users/signIn', {
			email: userInfo.email,
			password: userInfo.password
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