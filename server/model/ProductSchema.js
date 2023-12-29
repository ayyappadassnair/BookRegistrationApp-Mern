const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    publishYear:{
        type:Date
    },
    distributor:{
        type:String
    },
    image:{
        type:Buffer,
    }
})

const productModel = mongoose.model('products',productSchema)

module.exports = {productModel}