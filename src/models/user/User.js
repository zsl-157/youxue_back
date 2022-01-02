const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const User = new Schema({
    username:String,
    id:String,
    password:String,
    createtime:String,
    address:String,
    vip:{type:Number,default:0},
    icon:String,
    email:String,
    corns:Number,
    active:{type:Number,default:1},
    born:String,
    role:{type:String,default:'common'},
})

User.index({id:1});
const UserInfo = mongoose.model("UserInfo",User);
exports.UserInfo;