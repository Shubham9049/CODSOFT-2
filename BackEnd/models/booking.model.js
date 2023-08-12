const mongoose=require("mongoose")
const bookingschema=mongoose.Schema({
    name:{
        type:String,
    },
    adults:{
        type:Number,
    },
    childrens:{
        type:Number,
    },
    checkinDate:{
        type: Date,
    },
    checkoutdate:{
        type:Date,
    }
})
const bookingModel=mongoose.model("booking",bookingschema)
module.exports={bookingModel}