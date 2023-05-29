const mongoose = require("mongoose");

const DecorationCategorySchema =new mongoose.Schema({
    
    
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


const DecorationCategory = mongoose.model("decorationCategories", DecorationCategorySchema)

module.exports = DecorationCategory