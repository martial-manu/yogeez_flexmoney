const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email  : {
        type : String ,  
        required : true , 
        index : true 
    } , 
    name : {
        type : String , 
        maxLength : 25 , 
        required : true 
    } , 
    age : {
        type : Number , 
        min: 18 , 
        max : 65 
    } , 
    current_plan :{
        type : Number , 
        required : true ,
        default: 0   
    } , 
    next_plan : {
        type : Number , 
        required : true ,
        default: 0 
    } , 
    plans_booked:{
        type : Number , 
        default : 0 , 
        required : true 
    }
})

module.exports = mongoose.model('User' , UserSchema);