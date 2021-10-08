import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegister } from '../feature/user/userSlice.js'


const Register = (props) => {
	const dispatch = useDispatch()
	const [ name, setName ] = useState('')
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ confirmPW, setConfirmPW ] = useState('')
	const userRegister = useSelector(state => state.userSignin.userRegister)


	const handleSubmit = (e) => {
		e.preventDefault()
		if (password === confirmPW) {
			console.log('run true')
			dispatch(fetchRegister({
				name: name,
				email: email,
				password: password
			}))
		}
	}

	useEffect(() => {
		if(userRegister) {
			props.history.push('/')
		}
	}, [userRegister])



	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
				<ul>
					<li>
						<label>Name:</label>
					</li>
					<li>
						<input type='text' id='name' name='name' 
							onChange={(e)=>{setName(e.target.value)}} />
					</li>
					<li>
						<label>Email:</label>
					</li>
					<li>
						<input type='text' id='email' name='email'
							onChange={(e)=>{setEmail(e.target.value)}} />
					</li>
					<li>
						<label>password:</label>
					</li>
					<li>
						<input type='text' id='password' name='password'
							onChange={(e)=>{setPassword(e.target.value)}} />
					</li>
					<li>
						<label>Confirm password:</label>
					</li>
					<li>
						<input type='text' id='confirmPW' name='confirmPW'
							onChange={(e)=>{setConfirmPW(e.target.value)}} />
					</li>
					<li>
						<button type='submit'>Confirm</button>
					</li>
				</ul>
			</form>
		</div>
	)
}

export default Register