import * as React from 'react';

import {Form,FormItem,Row,Col,Input,Button,Table,Code} from 'yrui';

import thead from './thead';

let form=[{
  key:'horizontal',
  expr:'label和input是否在同一行',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'getFormData',
  expr:'获取表单内容',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'leftCol',
  expr:'label和input在同一行时label所占比例,1-12',
  type:'number',
  values:'1-12',
  default:'3',
},{
  key:'rightCol',
  expr:'label和input在同一行时input所占比例,1-12',
  type:'number',
  values:'1-12',
  default:'12-leftCol',
},{
  key:'formBtn',
  expr:'form表单提交、取消等按钮',
  type:'object',
  values:'-',
  default:'-',
}];
let formitem=[{
  key:'label',
  expr:'label文本',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'name',
  expr:'label名称',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'type',
  expr:'组件类型',
  type:'string',
  values:'radio/checkbox/switch/select/textarea/input',
  default:'input',
},{
  key:'rules',
  expr:'校验规则及提示信息',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'opts',
  expr:'组件配置',
  type:'object',
  values:'-',
  default:'-',
},/*{
  key:'change',
  expr:'监听输入框改变',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'blur',
  expr:'失去焦点事件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'focus',
  expr:'获取焦点事件',
  type:'function',
  values:'-',
  default:'-',
}*/];

const code=`
<Form horizontal getFormData={this.getFD}>
  <FormItem type="radio" label="单选" opts={{opt:[{value:'11'},{value:'22'}],inline:true,value:'11'}} />
  <FormItem type="checkbox" label="多选" opts={{opt:[{value:'11'},{value:'22'}],inline:true,value:['11','22']}} />
  <FormItem type="select" label="下拉选择" opts={{opt:[{value:'11'},{value:'22'}]}} />
  <FormItem type="switch" label="切换" opts={{value:true}} />
  <FormItem type="text" label="input" opts={{text:'button',color:'info'}} />
  <FormItem type="textarea" label="textarea" opts={{placeholder:'邮箱',value:''}} />
  <FormItem type="" label="密码" opts={{placeholder:'密码',value:'',type:'password'}} />
  <FormItem type="" label="等级" opts={{placeholder:'等级',value:'0',disabled:true}} />
  <FormItem type="" label="测试">
    <Input placeholder="ttt" />
  </FormItem>
</Form>
`;

const opts=[{
  name:'',
  type:'input',
  label:'数据应用名称',
  opts:{
    placeholder:'数据应用名称',
    value:'',
  },
  required:true,
},{
  name:'',
  type:'select',
  label:'监控模块',
  opts:{
    opt:[{value:'js'},{value:'css'},{value:'html'},{value:'react'},{value:'angular'},{value:'polymer'},{value:'node'},{value:'webgl'}],
    value:'',
  },
},{
  name:'',
  type:'select',
  label:'数据类型',
  opts:{
    opt:[{value:'js'},{value:'css'},{value:'html'},{value:'react'},{value:'angular'},{value:'polymer'},{value:'node'},{value:'webgl'}],
    value:'',
  },
},{ 
  name:'',
  type:'input',
  label:'URL',
  opts:{
    placeholder:'http://10.1.3.212:8080/#/configs/c3',
    value:'',
  },
},{
  name:'',
  type:'textarea',
  label:'post默认参数',
  opts:{
    placeholder:'post默认参数',
    value:'',
  },
},{
  name:'',
  type:'checkbox',
  label:'GET参数',
  opts:{
    opt:[{value:'js'},{value:'css'},{value:'html'}],
    value:2,
  },
}];

const opts1={
  input:{
    placeholder:'input',
    value:'',
  },
  select:{
    opt:[{value:'js'},{value:'css'},{value:'html'},{value:'react'},{value:'angular'},{value:'polymer'},{value:'node'},{value:'webgl'}],
    value:'',
  },
  switch:{
    onText:'开',
    offText:'关',
  },
  radio:{
    opt:[{value:'js'},{value:'css'},{value:'html'}],
    value:3,
  },
  checkbox:{
    opt:[{value:'js'},{value:'css'},{value:'html'}],
    value:2,
  },
  textarea:{
    placeholder:'textarea',
  },
  button:[{
    text:'取消',
    color:'warning',
    pullRight:true,
    // click:this.btnClick,
  },{
    type:'submit',
    text:'提交',
    color:'success',
    pullRight:true,
    // click:this.submit,
  }],
};

export default class FormDemo extends React.Component{
  state={
    val:'',
    d1:null,
    d2:null,
    d3:null,
  };
  getFD=(d)=>{
    console.log('getFD',d);
    /*this.setState({
      d1:d,
    });*/
  };
  getFD1=(d)=>{
    console.log('getFD1',d);
    /*this.setState({
      d2:d,
    });*/
  };
  getFormData=(d)=>{
    console.log('getFormData',d);
    /*this.setState({
      d3:d,
    });*/
  }
  btnClick=(e)=>{
    // console.log(Object.keys(e.target));
    // console.log(e.target.attributes);
    console.log(e);
  };
  submit=(e)=>{
    console.log(e);
  };
  submit1=(e)=>{
    const form1:any=this.refs.form1;
    form1.submit();
    // console.log(form1.submit());
  };
  test=(e)=>{
    // console.log(e.target.value);
    this.setState({
      val:e.target.value,
    });
  };
  render() {
    const {val}=this.state;
    let events=[{
      func:this.btnClick,
    },{
      name:'getData',
      func:this.submit,
    }];
    return (
      <div>
        <h2>表单示例</h2>
        <Row gutter={8}>
          <Col offset={1} span={8} sm={{span:8,offset:1}} xs={{span:8,offset:1}}>
            <Form horizontal ref="form1" getFormData={this.getFD}>
              <FormItem label="数据2" /*opts={{value:2}}*/ />
              {
                opts.map((v,k)=>{
                  return <FormItem key={`formitem-${k}`} {...v} />;
                })
              }
              <FormItem label="数据" name="f12">
                爬取下载完成率
              </FormItem>
              <FormItem>2</FormItem>
              <FormItem type="button">
                <Button text="提交" color="success" click={this.submit1} />
                <Button text="取消" color="warning" click={this.btnClick} />
              </FormItem>
            </Form>
          </Col>
        </Row>
        {/*<Form horizontal getFormData={this.getFD1}>
                  <Row gutter={8}>
                    <Col span={6}>
                      <FormItem label="name" name="name1" opts={{placeholder:'name',value:''}} />
                      <FormItem label="icon" name="icon1" opts={{placeholder:'name',value:''}} />
                      <FormItem label="img" name="img1" opts={{placeholder:'name',value:''}} />
                      <FormItem label="animate" name="animate1" opts={{placeholder:'name',value:''}} />
                      <FormItem label="msg" name="msg1" opts={{placeholder:'msg',value:''}} />
                      <FormItem label="drop" name="drop1" opts={{placeholder:'drop',value:''}} />
                      <FormItem type="button" name="button" opts={opts['button']} events={events} />
                    </Col>
                    <Col span={6}>
                      <FormItem label="name" name="name2" opts={{placeholder:'name',value:''}} />
                      <FormItem label="icon" name="icon2" opts={{placeholder:'name',value:''}} />
                      <FormItem label="img" name="img2" opts={{placeholder:'name',value:''}} />
                      <FormItem label="animate" name="animate2" opts={{placeholder:'name',value:''}} />
                      <FormItem label="msg" name="msg2" opts={{placeholder:'msg',value:''}} />
                      <FormItem label="drop" name="drop2" opts={{placeholder:'drop',value:''}} />
                    </Col>
                  </Row>
                </Form>
                <Form horizontal getFormData={this.getFormData}>
                  <Row gutter={8}>
                    <Col span={6} offset={3}>
                      <FormItem label="input" name="input" opts={opts['input']} />
                      <FormItem type="select" label="select" name="select" opts={opts['select']} />
                      <FormItem type="switch" label="switch" name="switch" opts={opts['switch']} />
                      <FormItem type="radio" label="radio" name="radio" opts={opts['radio']} />
                      <FormItem type="checkbox" label="checkbox" name="checkbox" opts={opts['checkbox']} />
                      <FormItem type="textarea" label="textarea" name="textarea" opts={opts['textarea']} />
                      <FormItem type="button" name="button" opts={opts['button']} events={events} />
                    </Col>
                  </Row>
                </Form>*/}
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <h2>代码示例</h2>
            <Code title="form" code={code} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <h2>Form参数说明</h2>
            <Table thead={thead} tbody={form} noBorder={true} />
          </Col>
          <Col span={12}>
            <h2>FormItem参数说明</h2>
            <Table thead={thead} tbody={formitem} noBorder={true} />
          </Col>
        </Row>
      </div>
    );
  }
}
