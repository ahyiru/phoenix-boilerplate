import * as React from 'react';

import {Form,FormItem,Input,Row,Col,Button,Table,Code,tools} from 'yrui';

// const $fetch=tools.$fetch;
// const $notify=tools.$notify;
// const $timer=tools.$timer;
const $validate=tools.$validate;

// $timer(document.body);
// $notify.start();

/*$fetch.get('/test1').then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
});
$fetch.post('/test2',{hhh:'h111111'}).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
});*/

let thead=[{
  key:'key',
  value:'参数',
},{
  key:'expr',
  value:'说明',
},{
  key:'type',
  value:'类型',
},{
  key:'values',
  value:'可选值',
},{
  key:'default',
  value:'默认值',
}];
let tbody=[{
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
let tbody1=[{
  key:'label',
  expr:'输入框头部',
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

const t=`<Form horizontal getFormData={this.getFD}>
    <FormItem type="radio" label="单选" opts={{opt:[{value:'11'},{value:'22'}],value:'11'}} />
    <FormItem type="checkbox" label="多选" opts={{opt:[{value:'11'},{value:'22'}],value:['11','22']}} />
    <FormItem type="select" label="下拉选择" opts={{opt:[{value:'11'},{value:'22'}]}} />
    <FormItem type="switch" label="切换" opts={{value:true}} />
    <FormItem type="text" label="input" opts={{text:'button',color:'info'}} />
    <FormItem type="textarea" label="textarea" opts={{placeholder:'邮箱',value:''}} />
    <FormItem type="" label="密码" opts={{placeholder:'密码',value:'',type:'password'}} />
    <FormItem type="" label="等级" opts={{placeholder:'等级',value:'0',disabled:true}} />
    <FormItem type="" label="等级">
      <Input placeholder="ttt" />
    </FormItem>
  </Form>
`;

export default class FormDemo extends React.Component {
  getFD=(d)=>{
    console.log(d);
  };
  render() {
    return (
      <div className="form">
        <h2>表单示例</h2>
        <Row gutter={8}>
          <Col offset={1} span={8}>
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
          </Col>
          <Col span={12}>
            <div className="textarea">
              <h4>代码示例</h4>
              <Code title="demo" code={t} />
            </div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={6}>
            <h2>Form参数说明</h2>
            <Table thead={thead} tbody={tbody} noBorder={true} />
          </Col>
          <Col span={6}>
            <h2>FormItem参数说明</h2>
            <Table thead={thead} tbody={tbody1} noBorder={true} />
          </Col>
        </Row>
      </div>
    );
  }
}
