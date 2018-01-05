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

export default class FormDemo extends React.Component{
  getFD=(d)=>{
    console.log(d);
  };
  render() {
    return (
      <div>
        <h2>表单示例</h2>
        {/*<Row gutter={8}>
                  <Col offset={1} span={8} sm={{span:8,offset:1}} xs={{span:8,offset:1}}>
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
                </Row>*/}
        <Form horizontal getFormData={this.getFD}>
          <Row gutter={8}>
            <Col span={6}>
              <h4>leftNav配置</h4>
              <FormItem label="name" name="name1" opts={{placeholder:'name',value:''}} />
              <FormItem label="icon" name="icon1" opts={{placeholder:'name',value:''}} />
              <FormItem label="img" name="img1" opts={{placeholder:'name',value:''}} />
              <FormItem label="animate" name="animate1" opts={{placeholder:'name',value:''}} />
              <FormItem label="msg" name="msg1" opts={{placeholder:'msg',value:''}} />
              <FormItem label="drop" name="drop1" opts={{placeholder:'drop',value:''}} />
            </Col>
            <Col span={6}>
              <h4><p>leftNav配置</p></h4>
              <FormItem label="name" name="name2" opts={{placeholder:'name',value:''}} />
              <FormItem label="icon" name="icon2" opts={{placeholder:'name',value:''}} />
              <FormItem label="img" name="img2" opts={{placeholder:'name',value:''}} />
              <FormItem label="animate" name="animate2" opts={{placeholder:'name',value:''}} />
              <FormItem label="msg" name="msg2" opts={{placeholder:'msg',value:''}} />
              <FormItem label="drop" name="drop2" opts={{placeholder:'drop',value:''}} />
            </Col>
          </Row>
        </Form>
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
