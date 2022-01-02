import Ids from '../models/Ids';

export default class basePro{
  constructor(){
    const idList = ['user_id','bg_id','avator_id']
  }

  async fetch(url,data={},type='GET',respType='json'){
    type = type.toUpperCase();
    respType = respType.toUpperCase();
    if(type === 'GET'){
      let dataStr = '';
      Object.keys(data).forEach((k)=>{
        dataStr += k + data[k] + '&';
      })
      if(dataStr !== ''){
         url = '?' + dataStr;
      }
      
    }
    let requestConfig = {
      method:type,
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }
    if(type === "POST"){
      Object.defineProperties(requestConfig,'body',{
        value:JSON.stringify(data)
      })
    }
    let respJson = await fetch(url,requestConfig);
    try{
      if(respType == 'TEXT'){
        respJson = await respJson.text();
      }else{
        respJson = await respJson.json();
      }
    }catch(err){
      console.log(err);
      throw new Error("获取http数据失败");
    }
    return respJson;

  }
  async getId(type){
    if(idList.includes(type)){
      return new Error("id类型错误")
    }
    try{
      const iData =await Ids.findOne();
      iData[type] ++;
      iData.save();
      return iData[type];
    }catch(err){
      console.log(err);
    }
  }
}