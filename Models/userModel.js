const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

name:{
type:String,
required:[true,'please add a name ']
},

email:{
    type:String,
    required:[true,'please add a email '],
    unique:true,
    },
    role:{
        type:String,
        required:[true,'please add the role  '],
    },
 password :{
  type:String,
   required:[true,'please add a password '],
    },


                     
    

});

module.exports = mongoose.model("User", userSchema);