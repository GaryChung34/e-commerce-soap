import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserSignin } from '../feature/user/userSlice.js'


const SignIn = (props) => {
	const [ user, setUser ] = useState('')
	const [ password, setPassword ] = useState('')
	const userSignin = useSelector(state => state.userSignin.userSignin)
	const dispatch = useDispatch()

	const onUserChange = (e) => {
		setUser(e.target.value)
	}

	const onPasswordChange = (e) => {
		setPassword(e.target.value)
	}
  
  const userInfo = {
  	email: user,
  	password: password
  }

	const handleSubmit = () => {
		dispatch(fetchUserSignin(userInfo))
	}

	console.log(userSignin)
	if(userSignin) {
		console.log('userSignin is something')
	} else {
		console.log('userSign is null')
	}
	useEffect(() => {
		if(userSignin) {
			props.history.push('/')
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