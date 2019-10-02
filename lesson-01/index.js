const express = require('express')

const app= express();

//ROUTES
app.get('/', (req, res)=>{
    res.send("Hello World")
})


//LISTEN ON PORT 
app.listen(3000)
