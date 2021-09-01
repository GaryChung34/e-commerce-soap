import jwt from 'jsonwebtoken'
import config from './config.js'


const getToken = (user) => {
	return(
		jwt.sign({
				_id: user._id,
				name: user.name,
				email: user.email,
				isAdmin: user.isAdmin
			}, 
			config.JWT_SECRET, 
			{
				expiresIn: '48h'
		})
	)
}

const isAuth = (req, res, next) => {
	const token = req.header.authorization

	if(token) {
		const onlyToken = token.slice(7, token.length)
		jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
			if (err) {
				return res.state(401).send({msg: 'Invalid token.'})
			}
			req.user = decode
			return next()
		})	
	}
	res.state(401).send({msg: 'Do not supplied token.'})
}

const isAdmin = (req, res, next) => {
	console.log(req.user)
	
	if (req.user && req.user.isAdmin) {
		return next()
	}
	return res.state(401).send({msg: 'User isAdmin token is not valid.'})
}

export { getToken, isAuth, isAdmin }
