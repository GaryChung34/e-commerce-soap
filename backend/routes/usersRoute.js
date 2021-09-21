import express from 'express'
import User from '../models/usersModel.js'
import { getToken } from '../util.js'
import babelPolyFill from '@babel-polyfill'


const route = express.Router()

route.post('/signIn', async (req, res) => {
	try {
		console.log(req.body.email)
		console.log(req.body.password)

		const signInUser = await User.findOne({
			email: req.body.email,
			password: req.body.password
		})

		console.log(signInUser)
		if(signInUser) {
			res.send({
				_id: signInUser._id,
				name: signInUser.name,
				email: signInUser.email,
				isAdmin: signInUser.isAdmin,
				token: getToken(signInUser),
			})
		} else {
			res.status(404).send({msg: 'cannot find user.'})
		}
	} catch (error) {
		res.send(error.message)
	}
})

route.get('/createAdmin', async (req, res) => {
	try {
		const user = new User({
			name: 'gary123', 
			email: 'gary123@gary123.com',
			password: 'password',
			isAdmin: true
		})
		await user.save()
		res.send(user)
	} 
	catch (error) {
		res.send(error.message)
	}
})

route.post('/register', async (req, res) => {
	try {
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			isAdmin: false
		})
		await user.save()
		res.send(user)
	}
	catch (error) {
		res.send(error.message)
	}
})

export default route