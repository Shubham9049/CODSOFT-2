const {bookingModel}=require("../models/booking.model")
const bookingRoutes=require("express").Router()



bookingRoutes.post("/add",async(req,res)=>{
    try {
        const{name,adults,childrens,checkinDate,checkoutdate}=req.body
        const booking=new bookingModel({name,adults,childrens,checkinDate,checkoutdate})
        await booking.save();
        res.status(200).json({"message":"Booking created successfully"})
    } catch (error) {
        console.log(error.message)
    }
})

bookingRoutes.get("/",async(req,res)=>{
    try {
        const BookingInfo= await bookingModel.find()
        res.status(200).json(BookingInfo)
    } catch (error) {
        console.log(error.message)
    }
})

module.exports={bookingRoutes}