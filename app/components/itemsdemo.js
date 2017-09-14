import * as React from 'react';

import {Items,Item,Table,Code} from 'yrui';

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
let items=[{
  key:'style',
  expr:'设置items样式',
  type:'object',
  values:'-',
  default:'-',
}];
let item=[{
  key:'border',
  expr:'设置border样式',
  type:'string',
  values:'-',
  default:'-',
}];

const t=`<Items>
    <Item>
      <h2>items配置</h2>
      <Table thead={thead} tbody={items} />
    </Item>
    <Item>
      <h2>item配置</h2>
      <Table thead={thead} tbody={item} />
    </Item>
  </Items>`;

export default class ItemsDemo extends React.Component {

  render() {
    return (
      <Items>
        <div className="textarea">
          <h4>代码示例</h4>
          <Code title="demo" code={t} />
        </div>
        <Item>
          <h2>items配置</h2>
          <Table thead={thead} tbody={items} />
        </Item>
        <Item>
          <h2>item配置</h2>
          <Table thead={thead} tbody={item} />
        </Item>
      </Items>
    );
  }
}
