const mongoose = require("mongoose");

const CategorySchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    
    image: {
        public_id:{
           type: String,
           required: true,
        },
        url:{
           type: String,
           required: true,
        }
      },
})


const CategoryModel = mongoose.model("categoris", CategorySchema)

module.exports = CategoryModel