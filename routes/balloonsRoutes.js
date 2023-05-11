const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const {createProduct}=require("../controllers/balloonsController");
const{getAllProducts}=require("../controllers/balloonsController");
const{getProductById}=require("../controllers/balloonsController");;
const{ updateProductById}=require("../controllers/balloonsController");
const{deleteProductById}=require("../controllers/balloonsController");
const {getItemsByCategory}=require("../controllers/balloonsController");
const {getItemsByCategoryName}=require("../controllers/balloonsController");
//set product
router.post("/product",upload.array('image'),createProduct);

//get all product
router.get("/product",getAllProducts);

//getProductbyID
router.get("/productbyID/:id",getProductById);
//getProductbyCategories
router.get('/productbyCategory/:category_id',getItemsByCategory);

//getProduct by Category name
router.get("/productsbyCategoryName/:categoryName", getItemsByCategoryName );

//updatebyID
router.put('/productUpdate/:id', updateProductById)

//delete
router.delete('/deleteProduct/:id',deleteProductById)

module.exports=router;