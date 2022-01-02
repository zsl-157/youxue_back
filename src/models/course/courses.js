const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Course = new Schema({
    coursename:String,
    courseid:String,
    createtime:String,
    title:String,
    descript:String,
    author:String,
    bgurl:String,
    videourl:String,
    //课程价格
    price:String,
    //访问权限
    permission:String,
})
