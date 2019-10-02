const express = require('express')
const mongoose = require('mongoose')
const app = express();
require('dotenv/config')
// MIDDELWARE

app.use('/posts', () => {
    console.log('This logic runs when you hit posts')
})


//ROUTES
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/posts', (req, res) => {
    res.send("Hello World")
})


// CONNECT TO MONGODB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => console.log("Connected to database!")
)


//LISTEN ON PORT 
app.listen(3000)
