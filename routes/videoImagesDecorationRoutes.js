const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const {createProduct}=require("../controllers/videoImagesDecorationController");
const{getAllProducts}=require("../controllers/videoImagesDecorationController");
const{getProductById}=require("../controllers/videoImagesDecorationController");;
const{ updateProductById}=require("../controllers/videoImagesDecorationController");
const{deleteProductById}=require("../controllers/videoImagesDecorationController");
const {getItemsByCategory}=require("../controllers/videoImagesDecorationController");
const {getItemsByCategoryName}=require("../controllers/videoImagesDecorationController");
//set product
router.post("/",upload.array('image'),createProduct);

//get all product
router.get("/",getAllProducts);

//getProductbyID
router.get("/:id",getProductById);
//getProductbyCategories
router.get('/productbyCategory/:category_id',getItemsByCategory);

//getProduct by Category name
router.get("/productsbyCategoryName/:categoryName", getItemsByCategoryName );

//updatebyID
router.put('/:id', updateProductById)

//delete
router.delete('/:id',deleteProductById)

module.exports=router;