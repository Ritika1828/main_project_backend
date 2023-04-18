const express = require('express');

const {getProducts , getProductDetailById} = require('../controllers/products_controller');


const router = express.Router();

router.get("/products", getProducts);

router.get('/find/:id',getProductDetailById)



module.exports = router;



