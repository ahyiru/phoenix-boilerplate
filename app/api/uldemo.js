import * as React from 'react';
import {Table,Code,Ul,Items,Item} from 'yrui';
import thead from './thead';

let ul=[{
  key:'uls',
  expr:'列表集',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'click',
  expr:'点击事件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'alignRight',
  expr:'文本右对齐',
  type:'boolean',
  values:'true/false',
  default:'false',
}];

const uls=[{
  left:'11',
  right:'22',
},{
  left:'11',
  right:'22',
},{
  left:'11',
  right:'22',
},{
  left:'11',
  right:'22',
}];

const code=`
const uls=[{
  left:'11',
  right:'22',
},{
  left:'11',
  right:'22',
},{
  left:'11',
  right:'22',
},{
  left:'11',
  right:'22',
}];
<Item>
  <Ul uls={uls} click={this.ulclick} />
</Item>
`;

export default class UlDemo extends React.Component{
  ulclick=(v)=>{
    console.log(v);
  };
  render(){
    return(
      <Items>
        <Item>
          <Ul uls={uls} click={this.ulclick} />
        </Item>
        <Item>
          <h4>代码示例</h4>
          <Code title="ul" code={code} />
        </Item>
        <Item>
          <h2>ul配置</h2>
          <Table thead={thead} tbody={ul} />
        </Item>
      </Items>
    );
  }
}
