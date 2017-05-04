import * as React from 'react';

import {Items,Item,Row,Col,Table} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let list=[{
  key:'name',
  expr:'list标题',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'click',
  expr:'点击事件',
  type:'function',
  values:'-',
  default:'-'
},{
  key:'list',
  expr:'内容',
  type:'array',
  values:'-',
  default:'-'
},{
  key:'type',
  expr:'列表类型',
  type:'string',
  values:'-',
  default:'-'
}];
let listContent=[{
  key:'pic',
  expr:'list左侧图片',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'h4',
  expr:'list中间文字标题',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'p',
  expr:'list中间文字内容',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'icon',
  expr:'list右侧图标',
  type:'string',
  values:'-',
  default:'-'
}];

export default class ListDemo extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <h2>list配置</h2>
          <Table thead={thead} tbody={list} />
        </Item>
        <Item>
          <h2>listContent配置</h2>
          <Table thead={thead} tbody={listContent} />
        </Item>
      </Items>
    )
  };
}
