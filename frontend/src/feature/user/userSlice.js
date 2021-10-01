import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
	userSignin: null,
	userRegister: null,
	signInWarn: false
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

export const fetchRegister = createAsyncThunk(
	'user/fetchRegister',
	async (userInfo) => {
		const { data } = await axios.post('/api/users/register', {
			name: userInfo.name,
			email: userInfo.email,
			password: userInfo.password
		})
		return data
	}
)

const UserSlice = createSlice({
	name: 'userSignin',
	initialState,
	reducers: {
		removeUser(state, action) {
			state.userSignin = null
		},
	},

	extraReducers: {
		[fetchUserSignin.fulfilled]: (state, action) => {
			state.userSignin = action.payload
			state.signInWarn = false
		},
		[fetchUserSignin.rejected]: (state, action) => {
			state.signInWarn = true
		},
		[fetchRegister.fulfilled]: (state, action) => {
			state.userRegister = action.payload
		}
	}
})

export default UserSlice.reducer
export const { removeUser } = UserSlice.actions