const mongoose = require("mongoose");

const CategorySchema =new mongoose.Schema({
    cattitle:{
        type:String,
        required:true,
    },
    
    
})


const CategoryModel = mongoose.model("categoris", CategorySchema)

module.exports = CategoryModel