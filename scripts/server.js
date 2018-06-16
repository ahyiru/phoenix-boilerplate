var express = require('express');

var colors=require('colors');

var path=require('path');
var fs=require('fs');

var app = express();

var config=require('../configs');

app.set('host', process.env.IP || config.HOST);
app.set('port', process.env.PORT || config.PRO_PORT);

var cors=require('cors');
var logger=require('morgan');
var bodyParser=require('body-parser');
var compression=require('compression');
app.use(logger('dev'));
app.use(bodyParser.json({limit:'20mb'}));
app.use(bodyParser.urlencoded({limit:'20mb',extended:true}));
app.use(compression());
if(app.get('env')==='production'){
  app.use(function(req,res,next) {
    var protocol=req.get('x-forwarded-proto');
    protocol=='https'?next():res.redirect('https://'+req.hostname+req.url);
  });
}
app.use(express.static(path.join(__dirname, '../build')));
app.get('*',function(request,response){
  response.sendFile(path.resolve(__dirname,'../build','index.html'));
});

const server=app.listen(app.get('port'),(err)=>{
  if (err) {
    console.log(err);
    return false;
  }
  console.log('\n服务已启动! '.black+'✓'.green);
  console.log(`\n监听端口: ${app.get('port')} ,正在构建,请稍后...`.cyan);
  console.log('-----------------------------------'.grey);
  console.log(` 本地地址: http://${app.get('host')}:${app.get('port')}`.magenta);
  console.log('-----------------------------------'.grey);
  console.log('\n按下 CTRL-C 停止服务\n'.blue);
});






