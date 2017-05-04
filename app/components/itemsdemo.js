import * as React from 'react';

import {Items,Item,Row,Col,Table} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let items=[{
  key:'style',
  expr:'设置items样式',
  type:'object',
  values:'-',
  default:'-'
}];
let item=[{
  key:'border',
  expr:'设置border样式',
  type:'string',
  values:'-',
  default:'-'
}];

export default class ItemsDemo extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <h2>items配置</h2>
          <Table thead={thead} tbody={items} />
        </Item>
        <Item>
          <h2>item配置</h2>
          <Table thead={thead} tbody={item} />
        </Item>
      </Items>
    )
  };
}
