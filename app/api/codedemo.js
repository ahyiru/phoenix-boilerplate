import * as React from 'react';

import {Items,Item,Table,Code} from 'yrui';
import thead from './thead';
let tbody=[{
  key:'title',
  expr:'code标题',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'code',
  expr:'code文本',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'theme',
  expr:'主题',
  type:'string',
  values:'dark/light',
  default:'light',
}];
const code=`
<Item>
  <h4>代码示例</h4>
  <Code title="code" code={code} />
</Item>
`;

const data=[{value:'js'},{value:'css'},{value:'html'},{value:'react'},{value:'angular'},{value:'polymer'},{value:'node'},{value:'webgl'}];

export default class CodeDemo extends React.Component{
  state={
    value:'js',
  };
  getSelectVal=(val)=>{
    console.log(val);
    this.setState({
      value:val,
    });
  };
  render(){
    return(
      <Items>
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
