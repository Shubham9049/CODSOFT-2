const {bookingModel}=require("../models/booking.model")
const bookingRoutes=require("express").Router()



bookingRoutes.post("/add",async(req,res)=>{
    try {
        const{name,adults,childrens,checkinDate,checkoutdate}=req.body
        const bookingInfo= await bookingModel.findOne({name,checkinDate,checkoutdate})
        if(bookingInfo)
        {
            return res.status(400).send({message:'Room is already booked'})
        }
        else{
            
            const booking=new bookingModel({name,adults,childrens,checkinDate,checkoutdate})
            await booking.save();
            res.status(200).json({"message":"Booking created successfully"})
        }
        
    } catch (error) {
        console.log(error.message)
    }
})

bookingRoutes.post("/searchroom",async(req,res)=>{
    try {
        const{name,adults,childrens,checkinDate,checkoutdate}=req.body
    const bookingInfo= await bookingModel.findOne({name,checkinDate,checkoutdate})
    if(bookingInfo){
        return res.status(400).send({msg:"room is already booked"})
    }else{
        return res.status(200).send({msg:"Room is available Please Log-in"})
    }
    } catch (error) {
        console.log(error)
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