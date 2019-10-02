const express = require('express')
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
require('dotenv/config')
// ADD ROUTES

const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

// CONNECT TO MONGODB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log("Connected to database!")
)


//LISTEN ON PORT 
app.listen(3000)
