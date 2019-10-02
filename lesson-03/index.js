const express = require('express')

const app= express();

// MIDDELWARE

app.use('/posts', ()=>{
    console.log('This logic runs when you hit posts')
})


//ROUTES
app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.get('/posts', (req, res)=>{
    res.send("Hello World")
})



//LISTEN ON PORT 
app.listen(3000)
