const mongoose =require("mongoose");
const userSchema = mongoose.Schema({
    name:{
        type :String,
        required : true
    },
    email: {
        type :String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    phone:{
        type : Number,
        default:"0",
        minlength:[10,"phone number must be 10 digit"],
        required:true
    },
    role:{
        type:String,
        default:"user"
    }
})

const UserModel=mongoose.model("user",userSchema)
module.exports={UserModel}