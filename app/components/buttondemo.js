import * as React from 'react';
import './button.less';
import {Button,ButtonGroup,Icon,Table,Code} from 'yrui';

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
  key:'color',
  expr:'按钮颜色',
  type:'string',
  values:'-',
  default:'default',
},{
  key:'block',
  expr:'是否是块状按钮',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'size',
  expr:'按钮大小',
  type:'string',
  values:'lg/sm/default',
  default:'-',
},{
  key:'outline',
  expr:'边框线按钮',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'icon',
  expr:'带icon按钮',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'text',
  expr:'按钮文本',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'margin',
  expr:'按钮间距',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'pullRight',
  expr:'按钮右对齐',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'click',
  expr:'按钮事件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'disabled',
  expr:'禁用按钮事件',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'type',
  expr:'按钮类型',
  type:'string',
  values:'button/submit',
  default:'button',
}];

let tbody1=[{
  key:'color',
  expr:'图标颜色',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'size',
  expr:'图标大小',
  type:'string',
  values:'lg/2x/3x/4x/5x',
  default:'-',
},{
  key:'fa',
  expr:'图标icon',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'click',
  expr:'按钮事件',
  type:'function',
  values:'-',
  default:'-',
}];

const t=`<h2>Button</h2>
  <div>
    <Button color={'default'} margin="ms" text='default' />
    <Button color={'info'} margin="ms" text='info' />
    <Button color={'warning'} margin="ms" text='warning' />
    <Button color={'success'} margin="ms" text='success' />
    <Button color={'danger'} margin="ms" text='danger' />
  </div>
  <div>
    <Button color={'default'} margin="ms" text='default sm' size={'sm'} />
    <Button color={'info'} margin="ms" text='info lg' size={'lg'} />
    <Button color={'warning'} margin="ms" text='warning default' />
    <Button color={'success'} margin="ms" text='success sm' size={'sm'} />
    <Button color={'danger'} margin="ms" text='danger lg' size={'lg'} />
  </div>
  <div>
    <Button color={'default'} margin="ms" text='apple' icon={'apple'} />
    <Button color={'info'} margin="ms" text='html5'icon={'html5'}  />
    <Button color={'warning'} margin="ms" text='css3'icon={'css3'}  />
    <Button color={'success'} margin="ms" text='weixin'icon={'weixin'}  />
    <Button color={'danger'} margin="ms" text='qq'icon={'qq'} />
    <Button color={'danger'} margin="ms" text='disabled'icon={'qq'} disabled />
    <Button color={'info'} margin="ms" text='block'icon={'qq'} block />
  </div>
  <div>
    <ButtonGroup>
      <Button color={'default'} icon={'apple'} />
      <Button color={'info'} icon={'html5'}  />
      <Button color={'warning'} icon={'css3'}  />
    </ButtonGroup>
  </div>
`;
const t1=`<h2>Icon</h2>
  <div className="icon">
    <Icon fa="user" />
    <Icon fa="user" size="lg" />
    <Icon fa="user" size="2x" />
    <Icon fa="user" size="3x" />
    <Icon fa="user" size="4x" />
    <Icon fa="user" size="5x" color="#f60" />
    <Icon fa="user" color="#f60" />
  </div>
`;

export default class ButtonDemo extends React.Component {

  click=()=>{
    console.log('1');
  };
  render() {
    /*const b1={
      color:'info',
      block:false,
      size:'sm',
      icon:'user',
      text:'test',
      margin:true,
      click:this.click,
    };*/
    return (
      <div className="button">
        <h2>Button</h2>
        <div>
          <Button color={'default'} margin="ms" text="default" />
          <Button color={'info'} margin="ms" text="info" />
          <Button color={'warning'} margin="ms" text="warning" />
          <Button color={'success'} margin="ms" text="success" />
          <Button color={'danger'} margin="ms" text="danger" />
        </div>
        <div>
          <Button color={'default'} margin="ms" text="default sm" size={'sm'} />
          <Button color={'info'} margin="ms" text="info lg" size={'lg'} />
          <Button color={'warning'} margin="ms" text="warning default" />
          <Button color={'success'} margin="ms" text="success sm" size={'sm'} />
          <Button color={'danger'} margin="ms" text="danger lg" size={'lg'} />
        </div>
        <div>
          <Button color={'default'} margin="ms" text="apple" icon={'apple'} />
          <Button color={'info'} margin="ms" text="html5" icon={'html5'}  />
          <Button color={'warning'} margin="ms" text="css3" icon={'css3'}  />
          <Button color={'success'} margin="ms" text="weixin" icon={'weixin'}  />
          <Button color={'danger'} margin="ms" text="qq" icon={'qq'} />
          <Button color={'danger'} margin="ms" text="disabled" icon={'qq'} disabled />
          <Button color={'info'} margin="ms" text="block" icon={'qq'} block />
        </div>
        <div>
          <ButtonGroup>
            <Button color={'default'} icon={'apple'} />
            <Button color={'info'} icon={'html5'}  />
            <Button color={'warning'} icon={'css3'}  />
          </ButtonGroup>
        </div>
        <h2>Button outline</h2>
        <div>
          <Button color={'default'} margin="ms" text="default" outline={true} />
          <Button color={'info'} margin="ms" text="info" outline={true} />
          <Button color={'warning'} margin="ms" text="warning" outline={true} />
          <Button color={'success'} margin="ms" text="success" outline={true} />
          <Button color={'danger'} margin="ms" text="danger" outline={true} />
        </div>
        <div>
          <Button color={'default'} margin="ms" text="default sm" size={'sm'} outline={true} />
          <Button color={'info'} margin="ms" text="info lg" size={'lg'} outline={true} />
          <Button color={'warning'} margin="ms" text="warning default" outline={true} />
          <Button color={'success'} margin="ms" text="success sm" size={'sm'} outline={true} />
          <Button color={'danger'} margin="ms" text="danger lg" size={'lg'} outline={true} />
        </div>
        <div>
          <Button color={'default'} margin="ms" text="apple" icon={'apple'} outline={true} />
          <Button color={'info'} margin="ms" text="html5" icon={'html5'} outline={true} />
          <Button color={'warning'} margin="ms" text="css3" icon={'css3'} outline={true} />
          <Button color={'success'} margin="ms" text="weixin" icon={'weixin'} outline={true} />
          <Button color={'danger'} margin="ms" text="qq" icon={'qq'} outline={true} />
          <Button color={'danger'} margin="ms" text="disabled" icon={'qq'} disabled outline={true} />
          <Button color={'info'} margin="ms" text="block" icon={'qq'} block outline={true} />
        </div>
        <div>
          <ButtonGroup>
            <Button color={'default'} icon={'apple'} outline={true} />
            <Button color={'info'} icon={'html5'} outline={true} />
            <Button color={'warning'} icon={'css3'} outline={true} />
          </ButtonGroup>
        </div>
        <div className="">
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={t} />
          </div>
          <h2>参数说明</h2>
          <Table thead={thead} tbody={tbody} noBorder={true} />
        </div>
        <h2>Icon</h2>
        <div className="icon">
          <Icon fa="user" />
          <Icon fa="user" size="lg" />
          <Icon fa="user" size="2x" />
          <Icon fa="user" size="3x" />
          <Icon fa="user" size="4x" />
          <Icon fa="user" size="5x" color="#f60" />
          <Icon fa="user" color="#f60" />
        </div>
        <div className="">
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={t1} />
          </div>
          <h2>参数说明</h2>
          <Table thead={thead} tbody={tbody1} noBorder={true} />
        </div>
      </div>
    );
  }
}
