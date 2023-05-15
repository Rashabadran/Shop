const mongoose = require('mongoose');
const{Schema,model}=mongoose;
const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
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

 

  description: {
    type: String,
    required: true,
  },
  

    decorationcategory:{
        type:Schema.Types.ObjectId,
        ref:"decorationCategories",
        required:[true, "Please include a Decoration Category"]
    }
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;
