const {UserModel}=require("../models/user.model")
const UserRoutes=require("express").Router()
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")

UserRoutes.get("/",async(req,res)=>{
    try {
        const user=await UserModel.find()
        res.status(200).json(user)
    } catch (error) {
       res.status(400).send(error.message)
    }
})

// signup
UserRoutes.post("/signup",async(req,res)=>{
    try {
        const{name,email,password,phone}=req.body
        const hashedPass=bcrypt.hashSync(password,5)
        const singupdata=new UserModel({name,email,password:hashedPass,phone})
        await singupdata.save();
        res.status(200).send({msg:"SignUp Successfully"})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})
// login
UserRoutes.post("/login",async(req,res)=>{
    try {
        const{email,password}=req.body
        const loginUser= await UserModel.findOne({email})
        if(loginUser){
           const isEqual=bcrypt.compareSync(password,loginUser.password)
           if(isEqual){
            res.status(200).send({
                msg:"Login Succesfully",
                status:true,
                token :jwt.sign({"_id":loginUser._id,name:loginUser.name},"MySecretKey"),
                user : {
                    userName: loginUser.name,
                    email : loginUser.email,
                    phone : loginUser.phone
                }
            })
           }else{
            res.status(400).send({
                msg:'Invalid Email or Password',
                status:false
            })
        }
        }else{
            res.status(401).send({
                msg:"Email Not Found",
                status:false
            });
            
        }
       
     
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
})

module.exports={UserRoutes}