import * as React from 'react';

import {Items,Item,Row,Col,Table,UL,Code} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let ul=[{
  key:'uls',
  expr:'列表集',
  type:'array',
  values:'-',
  default:'-'
},{
  key:'click',
  expr:'点击事件',
  type:'function',
  values:'-',
  default:'-'
},{
  key:'alignRight',
  expr:'文本右对齐',
  type:'boolean',
  values:'true/false',
  default:'false'
}];

let uls=[{
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

const t=`let uls=[{
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
  //
  <UL uls={uls} />
`;

export default class ULDemo extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <UL uls={uls} />
        </Item>
        <Item>
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={t} />
          </div>
        </Item>
        <Item>
          <h2>ul配置</h2>
          <Table thead={thead} tbody={ul} />
        </Item>
      </Items>
    )
  };
}
