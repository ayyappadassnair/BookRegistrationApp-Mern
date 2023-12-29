const express = require('express')
const {productController} = require('../controller/createProductController')
const router = express.Router()

router.route('/register').post(productController)

module.exports= router;