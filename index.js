const express = require('express')
const axios = require('axios')

const app = express()

app.get('/*', (req, res) => {

	const url = `https://my.setmore.com${req.url}`

	console.log(`Making a request to ${url}`)
	
	axios.post(url).then(data => {
		res.send(data)
	}).catch(err => res.send(err))
})

app.listen(3000)
