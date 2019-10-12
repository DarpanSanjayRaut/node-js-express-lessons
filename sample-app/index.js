const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

app.use(express.static(__dirname + '/assets'));
app.use(jsonParser)

app.post('/login', (req, res)=>{
	console.log("REQUEST DATA")
	console.log(req.body)
	let status = login(req.body)
	res.send(status)
})


function login(user) {
	if(user.username === "darpan") {
		return { 'status' : 'login'}
	}
	return { 'status' : 'failed'}
}


app.listen(3000)