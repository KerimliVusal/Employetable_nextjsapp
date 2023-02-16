import {model,models,Schema} from 'mongoose'
const userModel=Schema({
    name:String,
    lastname:String,
    email:String,
    salary:Number,
    date:String,
    status:String
})
const Users=models.user||model('user',userModel)
export default Users