'use strict';
import mongoose from "mongoose";

const uri = "mongodb://127.0.0.1:27017/test"
mongoose.connect(uri);

const db = mongoose.connection;
db.on("error",function(){
    console.log("连接失败");
    db.close();
})

db.once('open',function(){
    console.log("连接成功")
})

db.once("close",function(){
    console.log("数据库关闭，重新连接:\n");
    db.connect(uri,{server:{auto_reconnect:true}})
})


mongoose.Promise = global.Promise;

export default db;



