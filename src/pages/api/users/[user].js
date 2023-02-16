import { deleteuser, getusers, postuser, updateuser } from "database/controlller";
import { connectDB } from "database/mongodb"

export default function handler(req, res) {
    connectDB();
    const {method}=req
    switch(method){
    case "GET":
        getusers(req,res)
        // res.status(200).json({method,name:"GET Request"})
    break;
    case "POST":
        postuser(req,res)
        // res.status(200).json({method,name:"POST Request"})
    break;
    case "PUT":
        updateuser(req,res)
    break;
    case "DELETE":
       deleteuser(req,res)
    break;
    default:
        res.setHeader('Allow',['GET','POST','PUT','DELETE'])
        res.status(405).end(`METHOD ${method} NOT Allowed`)
        break;
}

    // res.status(200).json({ name: 'John Doe' })
}
  