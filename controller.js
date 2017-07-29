'use strict';
function getMonthFromString(mon){
   return new Date(Date.parse(mon +" 1, 2012")).getMonth()
}
exports.show= function(req,res){
  if(/^[0-9]{1,}/.test(req.params.timetype)){
    var mili=req.params.timetype*1000;
    var date = new Date(mili);
    res.json(
    {
      'unix':parseInt(req.params.timetype),
      'normal':date.toDateString()
    }
    )
  }
  else if(/(January|February|March|April|May|June|July|August|September|October|November|December)\s[0-9]{2}[,]\s[0-9]{4}/.test(req.params.timetype)){
    var d=req.params.timetype.split(' ');
    var month=d[0];var day = parseInt(d[1].substr(0,2)); var year=parseInt(d[2]);
    var unixt= new Date(year,getMonthFromString(month),day);
    res.json({'unix':unixt.valueOf()/1000,'normal':req.params.timetype})
    console.log(d);
  }
  else{
  res.json({'unix':null,'normal':null});
  }
};
exports.home=function(req,res){
  res.send("<h1>WELCOME</h1>");
}