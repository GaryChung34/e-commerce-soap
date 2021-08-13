const express = require('express')
const app = express()
const port = 1000

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example is listening at http://localhost:${port}`)
})