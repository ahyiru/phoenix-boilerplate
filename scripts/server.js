var express = require('express');
var path=require('path');
var colors=require('colors');
var cors=require('cors');
var logger=require('morgan');
var bodyParser=require('body-parser');
var compression=require('compression');

var app = express();

var config=require('../configs/config');

app.set('host', process.env.IP || config.HOST);
app.set('port', process.env.PORT || config.PRO_PORT);

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(compression());

if(app.get('env')==='production'){
  app.use(function(req,res,next) {
    var protocol=req.get('x-forwarded-proto');
    protocol=='https'?next():res.redirect('https://'+req.hostname+req.url);
  });
}
app.use(express.static(path.join(__dirname, '../build')));

app.get('*',function(request,response){
  console.log(request.ourl);
  console.log(request.originalUrl);
  response.sendFile(path.resolve(__dirname,'build','index.html'));
});

app.listen(app.get('port'),(err)=>{
  if (err) {
    console.log(err);
  }
  console.log('监听端口:'+ app.get('port'));
});

