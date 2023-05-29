const express =require('express')
const router = express.Router()
const { getCategoris, setCategory, updateCategory,deleteCategory, getCategoryById}= require('../controllers/balloonsCategoryControllers')
const catupload=require("../middleware/catupload");

router.get('/', getCategoris)

router.get('/:id', getCategoryById)



router.post('/',setCategory)



router.put('/:id', updateCategory)


router.delete('/:id', deleteCategory)

module.exports = router