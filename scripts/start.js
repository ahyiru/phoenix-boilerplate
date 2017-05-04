var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.development');
var colors=require('colors');

var config=require('../configs/config');

var app = express();
var compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  hot: true,
  historyApiFallback: true,
  compress: true, 
  noInfo: true,
  stats: {
    colors: true,
  },
  stats: {
    colors: true,
  },
}));

app.use(require('webpack-hot-middleware')(compiler));

app.set('port', process.env.PORT || config.PORT);

var cors=require('cors');
var logger=require('morgan');
var bodyParser=require('body-parser');  // 数据解析
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
if(app.get('env')==='production'){
  app.use(function(req,res,next) {
    var protocol=req.get('x-forwarded-proto');
    protocol=='https'?next():res.redirect('https://'+req.hostname+req.url);
  });
}

// var rest=require('./demo/servers/restful')(app);
// require('../rest/server')(app);

app.listen(app.get('port'),(err)=>{
  if (err) {
    console.log(err);
  }
  console.log('监听端口:'+ app.get('port') +', 正在构建,请稍后...');
});
