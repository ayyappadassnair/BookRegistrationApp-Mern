const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const productRouter = require('./ProductRoute/createProduct.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/products',productRouter)


mongoose.connect('mongodb+srv://ayyappadas:ayyappadas@mern.nh1mk0e.mongodb.net/mern?retryWrites=true&w=majority')
.then(()=>{
    console.log("Database conected successfully...!")
})
.catch((err)=>{
    console.log(err)
})



app.listen(5000,()=>{
    console.log("Server is start...!")
})