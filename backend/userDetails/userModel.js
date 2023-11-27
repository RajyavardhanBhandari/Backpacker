const mongoose = require('mongoose');
var Schema = new mongoose.Schema({
name:{
    type:String,
},
email:{
    type: String,
    required: true,
    unique: true
}
})
const userData = mongoose.model('userData', Schema);
module.exports = userData;