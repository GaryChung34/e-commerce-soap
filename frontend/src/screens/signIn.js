import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserSignin } from '../feature/user/userSlice.js'


const SignIn = () => {
	const [ user, setUser ] = useState('')
	const [ password, setPassword ] = useState('')
	const userSignin = useSelector(state => state.user.userSignin)
	const dispatch = useDispatch()

	const onUserChange = (e) => {
		setUser(e.target.value)
	}

	const onPasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleSubmit = () => {
		dispatch(fetchUserSignin({
			name: user,
			password: password
		}))
	}

	useEffect({
		if(userLogin) {
			this.history.push('/')
		}
	}, [userSignin]) 


	return(
		<div>
			<h1>Sign-in </h1>
			<form onSubmit={handleSubmit}>
				<label>User:</label>
				<input type="text" id='user' name='user'
					onChange={onUserChange}/>
				<label>Password:</label>
				<input type="text" id='password' name='password'
					onChange={onPasswordChange}/>
			</form>
		</div>
	)
}

export default SignIn