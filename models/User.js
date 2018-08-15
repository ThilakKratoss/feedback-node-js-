const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//cretae a schema
const UserSchema = new Schema({
name:{
  type:String,
  required:true
},
comment:{
type:String,
required:true
}, 
date:{
  type:Date,
  default:Date.now
}
}); 
 mongoose.model('users',UserSchema); 