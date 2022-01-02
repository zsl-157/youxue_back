import express from 'express';
import connectMongo from 'connect-mongo';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import config from 'config-lite';


const app = express();
app.all('*', (req, res, next) => {
  const { origin, Origin, referer, Referer } = req.headers;
  const allowOrigin = origin || Origin || referer || Referer || '*';
	res.header("Access-Control-Allow-Origin", allowOrigin);
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", 'Express');
	if (req.method == 'OPTIONS') {
  	res.sendStatus(200);
	} else {
    next();
	}
});
app.use(cookieParser);
const MongoStore = connectMongo(session);
app.use(session({
  name:"SID",
  resave:true,
  saveUninitialized:false,
  cookie:{
    httpOnly:true,
  },
  store:new MongoStore({
    url:"mongodb://127.0.0.1:27017/youxue"
  })
}))

app.listen(8082,()=>{
  console.log(`成功监听端口8082`);
})