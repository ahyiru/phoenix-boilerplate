app.get('/api',function(request,response,next){
  var src=fs.readdirSync(path.join(__dirname,'doc')).filter(function (file) {
    return (file.indexOf('.') !== 0) && (file.indexOf('.md') > 0);
  });
  response.send({src:src});
});
// app.get('/api',function(request,response,next){
  fs.readdirSync(path.join(__dirname,'doc')).filter(function (file) {
    return (file.indexOf('.') !== 0) && (file.indexOf('.md') > 0);
  }).forEach(function (file) {
    // console.log(file.slice(0,-3));
    app.get('/api/'+encodeURIComponent(file),(req,res)=>{
      fs.readFile(path.join(__dirname+'/doc',file),'utf8',(err,data)=>{ //readFileSync //同步
        if(err){
          throw err;
        }else{
          // var html=marked(data.toString());
          res.send({html:marked(data)});
        }
      });
    });
  });


  app.post('/table/addpage',function(req,res){
    var data=req.body;
    var className=data.className[0].toUpperCase()+data.className.slice(1);
    var temp=`import * as React from 'react';
export default class ${className} extends React.Component<any,any> {
  constructor(props){
    super(props);
  };
  componentWillMount(){
    
  };
  componentDidMount(){
    
  };
  componentWillUnmount(){
    
  };
  render() {
    return (
      <div>
        <h2>${data.name}</h2>
        <div>${data.data}</div>
      </div>
    )
  };
}`;
    var filename=path.join(__dirname,`./demo/views/content/test/${data.name}.tsx`);
    fs.writeFile(filename,temp,function(err){
      if(err){
        console.log(err);
        return false;
      }
      res.send({result:'OK'});
    });
  });
  // 删除html页面
  app.post('/table/delpage',function(req,res){
    var data=req.body;
    var file=path.join(__dirname,`./demo/views/content/test/${data.name}`);
    fs.unlinkSync(file);
    console.log(`${file}已删除!`);
  });