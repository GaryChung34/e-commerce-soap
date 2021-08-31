import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserSignin } from '../feature/user/userSlice.js'
import { Link } from 'react-router-dom'


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

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(fetchUserSignin({
			email: user,
			password: password
		}))
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
				<ul>
					<li>
						<label>Email:</label>
					</li>
					<li>
						<input type="text" id='user' name='user'
							onChange={onUserChange}/>
					</li>
					<li>
						<label>Password:</label>
					</li>
					<li>
						<input type="text" id='password' name='password'
							onChange={onPasswordChange}/>
					</li>
					<li>
						<button type='submit'>Submit</button>
					</li>
				</ul>
			</form>
			<h2>New user? let register!</h2>
			<Link to='/register'>Register</Link>
		</div>
	)
}

export default SignIn