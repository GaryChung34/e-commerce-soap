import jwt from 'jsonwebtoken'
import config from './config.js'


export const getToken = (user) => {
	return(
		jwt.token(user, config.JWT_SECRET, {
			expiresIn: '48h'
		})
	)
}
