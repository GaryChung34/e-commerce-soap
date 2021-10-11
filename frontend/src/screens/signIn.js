import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserSignin } from '../feature/user/userSlice.js'
import { Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/solid'


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
		<div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<img
						className="mx-auto h-15 w-auto"
						src="/images/shopping_login.svg"	
						alt="Workflow"
					/>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in for shopping</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{' '}
						<Link to='/register' href="#" className="font-medium text-blue-600 hover:text-blue-500">
							Register right now!
						</Link>
					</p>
				</div>
				<form className="mt-8 space-y-6" action="#" method="POST"
					onSubmit={handleSubmit}>
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								onChange={onUserChange}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								onChange={onPasswordChange}
							/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
							/>
							<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
								Remember me
							</label>
						</div>

						<div className="text-sm">
							<a href="#" className="font-medium text-blue-600 hover:text-blue-500">
								Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							<span className="absolute left-0 inset-y-0 flex items-center pl-3">
								<LockClosedIcon className="h-5 w-5 text-blue-300 group-hover:text-blue-400" aria-hidden="true" />
							</span>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignIn