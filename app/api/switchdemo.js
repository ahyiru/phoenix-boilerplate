import * as React from 'react';
import {Items,Item,Table,Code,Switch} from 'yrui';
import thead from './thead';

const tbody=[{
  key:'onText',
  expr:'选中时文本',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'offText',
  expr:'关闭时文本',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'disabled',
  expr:'禁用',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'value',
  expr:'开关状态',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'change',
  expr:'获取状态值',
  type:'function',
  values:'-',
  default:'-',
}];
const code=`
<Item>
  <h4>Textarea</h4>
  <Switch onText="开" offText="关" change={this.change} />
</Item>
`;

export default class CheckboxDemo extends React.Component{
  change=(val)=>{
    console.log(val);
  };
  render(){
    return(
      <Items>
        <Item>
          <h4>Switch</h4>
          <Switch onText="开" offText="关" change={this.change} />
        </Item>
        <Item>
          <h4>代码示例</h4>
          <Code title="Switch" code={code} />
        </Item>
        <Item>
          <h2>Switch配置</h2>
          <Table thead={thead} tbody={tbody} />
        </Item>
      </Items>
    );
  }
}
