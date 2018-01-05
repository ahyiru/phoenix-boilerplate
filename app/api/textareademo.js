import * as React from 'react';
import {Items,Item,Table,Code,Textarea} from 'yrui';
import thead from './thead';

const tbody=[{
  key:'style',
  expr:'样式',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'placeholder',
  expr:'提示文本',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'value',
  expr:'文本',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'change',
  expr:'change事件',
  type:'function',
  values:'-',
  default:'function(){}',
},{
  key:'focus',
  expr:'focus事件',
  type:'function',
  values:'-',
  default:'function(){}',
},{
  key:'blur',
  expr:'blur事件',
  type:'function',
  values:'-',
  default:'function(){}',
},{
  key:'error',
  expr:'输入是否有错误',
  type:'boolean',
  values:'true/false',
  default:'false',
}];
const code=`<Textarea placeholder="测试页面" change={this.change} />`;

export default class TextareaDemo extends React.Component{
  change=(e)=>{
    console.log(e.target.value);
  };
  render(){
    return(
      <Items>
        <Item>
          <h4>Textarea</h4>
          <Textarea placeholder="测试页面" change={this.change} />
        </Item>
        <Item>
          <h4>代码示例</h4>
          <Code title="code" code={code} />
        </Item>
        <Item>
          <h2>code配置</h2>
          <Table thead={thead} tbody={tbody} />
        </Item>
      </Items>
    );
  }
}
