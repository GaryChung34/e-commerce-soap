import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserSignin } from '../feature/user/userSlice.js'
import { Link } from 'react-router-dom'


const SignIn = (props) => {
	const [ user, setUser ] = useState('')
	const [ password, setPassword ] = useState('')
	const { userSignin, signInWarn } = useSelector(state => state.userSignin)
	const dispatch = useDispatch()

	const queryStr = props.location.search
	const redirect = queryStr? queryStr.split('=')[1] : '/' 

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
			props.history.push(redirect)
		}
	}, [userSignin, signInWarn])


	return(
		<div>
			<h1 className="text-2xl">Sign-in </h1>
			{signInWarn &&
				<h2 style={{color: "red"}}>Incorrect user name or password!</h2>
			}
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
			<h2 className="text-xl">New user? let register!</h2>
			<Link to='/register'>Register</Link>
		</div>
	)
}

export default SignIn