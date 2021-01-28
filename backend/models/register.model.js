const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const registerSchema= new Schema({
  fullname:{type: String, required: true},
  country:{type:String, required:true},
  contact_number:{type:String, required:true},
  email_id:{type:String, required:true},
  city:{type:String, required:true},
  
   
},
{
    timestamps: true,
})

const Register= mongoose.model('Register', registerSchema);

module.exports = Register;