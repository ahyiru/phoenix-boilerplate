import * as React from 'react';

import {Items,Item,Row,Col,Table,Code} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let code=[{
  key:'title',
  expr:'code标题',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'code',
  expr:'code文本',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'theme',
  expr:'主题',
  type:'string',
  values:'dark/light',
  default:'light'
}];

const t=`
  const t=\`<Code title="demo" code={t} />\`;

  <Code title="demo" code={t} />
`;

export default class CodeDemo extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={t} />
          </div>
        </Item>
        <Item>
          <h2>code配置</h2>
          <Table thead={thead} tbody={code} />
        </Item>
      </Items>
    )
  };
}
