import express from 'express'
import User from '../models/usersModel.js'


const route = express.Router()

route.get('/createAdmin', (req, res) => {
	const user = new User({
		name: 'gary123', 
		email: 'gary123@gary123.com',
		password: 'password',
		isAdmin: true
	})
	user.save()
	res.send(user)
})

export default route