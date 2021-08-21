const express = require('express')
const app = express()
const port = 1000

const users = [
	{name: "gary", id: "123", password: "abcd"}, 
	{name: "django", id: '222', password: 'bbbb'}
]

const products = [
	{
		id: "s1",
	  name: "Earthy Blend", 
	  star: 4,
	  image: "/images/soap1.jpg",
	  price: {
	    origin: 90.50,
	    discount: 45.90
	  },
	  ingredients: ["vanilla", "basil"]
	},

	{
		id: "s2",
	  name: "Gummy Soap", 
	  star: 3,
	  image: "/images/soap2.png",
	  price: {
	    origin: 100.00,
	    discount: 50.00
	  },
	  ingredients: ["vanilla", "borage"]
	},

	{
		id: "s3",
	  name: "Carved Crystal", 
	  star: 5,
	  image: "/images/soap3.jpg",
	  price: {
	    origin: 60.50,
	    discount: 40.90
	  },
	  ingredients: ["vanilla"]
	}, 

	{
		id: "s4",
	  name: "Candy Style", 
	  star: 1,
	  image: "/images/soap4.jpg",
	  price: {
	    origin: 55.50,
	    discount: 45.90
	  },
	  ingredients: ["basil", "mace"]
	}, 

	{
		id: "s5",
	  name: "Bath Bomb", 
	  star: 2,
	  image: "/images/soap5.jpg",
	  price: {
	    origin: 70.50,
	    discount: 65.50
	  },
	  ingredients: ["borage", "basil", "dill"]
	},

	{
		id: "s6",
	  name: "Little Poppy", 
	  star: 4,
	  image: "/images/soap6.jpg",
	  price: {
	    origin: 70.50,
	    discount: 50.00
	  },
	  ingredients: ["basil"]
	},

	{
		id: "s7",
	  name: "Relax Spa", 
	  star: 5,
	  image: "/images/soap7.jpg",
	  price: {
	    origin: 70.50,
	    discount: 50.00
	  },
	  ingredients: ["basil", "hyssop"]
	},

	{
		id: "s8",
	  name: "Bath Bomb", 
	  star: 4,
	  image: "/images/soap8.jpg",
	  price: {
	    origin: 70.50,
	    discount: 65.50
	  },
	  ingredients: ["rue"]
	},

	{
		id: "s9",
	  name: "Bath Bomb", 
	  star: 5,
	  image: "/images/soap9.jpg",
	  price: {
	    origin: 70.50,
	    discount: 50.50
	  },
	  ingredients: ["rue", "mace"]
	},

	{
		id: "s10",
	  name: "Bath Bomb", 
	  star: 4,
	  image: "/images/soap10.jpg",
	  price: {
	    origin: 70.50,
	    discount: 60.50
	  },
	  ingredients: ["borage", "mace"]
	},
]

app.get('/api/users', (req, res) => {
	res.send(users)
})

app.get('/api/products', (req, res) => {
	res.send(products)
})

app.listen(port, () => {
	console.log(`Example is listening at http://localhost:${port}`)
})