module.exports = {
  port:8082,
  url:"mongodb://127.0.0.1:27017/youxue",
  session:{
    name:"SID",
    secret:"SID", 
    secrure:false,
    maxAge:365*24*60*60*1000,
    cookie:{
      httpOnly:true,
    }
  }

}