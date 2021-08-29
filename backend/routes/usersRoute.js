import express from 'express'
import User from '../models/usersModel.js'
import { getToken } from '../util.js'


const route = express.Router()

route.post('/signIn', async (req, res) => {
	try {
		console.log(User)
		console.log(typeof User)
		console.log(req.body.name)
		const signInUser = await User.findOne({
			name: req.name,
		}).exec()
		console.log('finish find.')
		console.log(signInUser)
		if(signInUser) {
			res.send({
				_id: signInUser._id,
				name: signInUser.name,
				email: signInUser.email,
				isAdmin: signInUser.isAdmin,
				// token: getToken(signInUser),
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

export default route