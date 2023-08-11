const jwt=require("jsonwebtoken")

const verify=async(req,res,next)=>{
    try {
        const token=req.headers.authorization
        const isverfied=jwt.verify(token,process.env.secret)
        if(isverfied){
            console.log(isverfied)
            req.user={...isverfied}
            req.body.userId=isverfied.id
            next()
        }else{
            res.status(400).send({msg:"something went wrong"})
        }
       
    } catch (error) {
        res.json({msg:"Something Went Wrong", error:error.message})
    }
}
module.exports={verify}