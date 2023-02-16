import Users from "model/model"

export const getusers=async(req,res)=>{
    try{ 
        const users= await Users.find({})
        if(!users) return res.status(404).json({err:'Error data not found'})
      res.status(200).json(users)
    }
    catch(err){
    res.status(404).json({err:'Error get request'})
    }
}
export const postuser=async(req,res)=>{
    try{
        const formdata=req.body
        
        if(!formdata){
            res.status(404).json({err:'Error formdata  '})
        }
        Users.create(formdata,function(err,data){
            res.status(200).json(data)
        })
     
    }
    catch(err){
    res.status(404).json({err:'Error post request'})
    }
}
export const updateuser= async(req,res)=>{
    try{
       const {userId}=req.query
       const formdata=req.body
       if(userId&&formdata){
        const user=await Users.findOneAndUpdate(userId,formdata)
        res.status(200).json(user)
       }
       res.status(404).json({err:'User update request error'})
    }
    catch(err){
        res.status(404).json({err:'Error update request'})
    }
}
export const deleteuser= async(req,res)=>{
    try{
        const {userId}=req.query
       
    //    if(userId){
         const user=await Users.findOneAndDelete(userId)
        res.status(200).json({deleted:user})
    //    }
       res.status(404).json({err:'User delete request error'})
    }
    catch(err){
        res.status(404).json({err:'Error delete request'})
    }
}