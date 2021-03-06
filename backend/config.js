import dotenv from 'dotenv'

const result = dotenv.config()
if (result.error) {
	throw result.error
}

export default {
	MONGODB_URL: process.env.MONGODB_URL,
	JWT_SECRET: process.env.JWT_SECRET,
	PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID
}