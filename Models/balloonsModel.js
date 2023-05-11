const mongoose=require ("mongoose");
const{Schema,model}=mongoose;
const producttables=mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:Number
    },
   
     color:{
         type: [String],
         required: true,
         minLength: 1,
         maxLength: 10
        
        
     },
     description:{
        type:String
     },
     discount_per:{
        type:Number
     },

     
     priceAfterDiscount:{
        type:Number
     },
     image: [{
         public_id:{
            type: String,
            //required: true,
         },
         url:{
            type: String,
            //required: true,
         }
       }],
    

    category:{
        type:Schema.Types.ObjectId,
        ref:"categoris",
        required:[true, "Please include a Category"]
    }
   
},
    {
    timestamps: true,
    }
    
)
module.exports = mongoose.model("producttables", producttables);
