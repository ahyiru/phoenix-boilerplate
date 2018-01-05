import * as React from 'react';

import {Table,Code,Items,Item,List} from 'yrui';
import thead from './thead';

let list=[{
  key:'name',
  expr:'list标题',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'click',
  expr:'点击事件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'list',
  expr:'列表内容',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'type',
  expr:'列表类型',
  type:'string',
  values:'-',
  default:'-',
}];
let listContent=[{
  key:'url',
  expr:'跳转地址',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'pic',
  expr:'list左侧图片',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'h4',
  expr:'list中间文字标题',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'p',
  expr:'list中间文字内容',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'icon',
  expr:'list右侧图标',
  type:'string',
  values:'-',
  default:'-',
}];

let lists=[{
  url:'javascript:;',
  pic:'t1',
  h4:'t1',
  p:'桃花坞里桃花庵',
},{
  url:'javascript:;',
  pic:'t2',
  h4:'t2',
  p:'桃花坞里桃花庵',
},{
  url:'javascript:;',
  pic:'t3',
  h4:'t3',
  p:'桃花坞里桃花庵',
},{
  url:'javascript:;',
  pic:'t4',
  h4:'t4',
  p:'桃花坞里桃花庵',
},{
  url:'javascript:;',
  pic:'t5',
  h4:'t5',
  p:'桃花坞里桃花庵',
}];

const code=`
let lists=[{
  url:'javascript:;',
  pic:'t1',
  h4:'t1',
  p:'桃花坞里桃花庵',
},{
  url:'javascript:;',
  pic:'t2',
  h4:'t2',
  p:'桃花坞里桃花庵',
},{
  url:'javascript:;',
  pic:'t3',
  h4:'t3',
  p:'桃花坞里桃花庵',
},{
  url:'javascript:;',
  pic:'t4',
  h4:'t4',
  p:'桃花坞里桃花庵',
},{
  url:'javascript:;',
  pic:'t5',
  h4:'t5',
  p:'桃花坞里桃花庵',
}];
<Item>
  <List list={lists} name="list" />
</Item>
`;

export default class ListDemo extends React.Component{

  render(){
    return(
      <Items>
        <Item>
          <h2>list配置</h2>
          <Table thead={thead} tbody={list} />
        </Item>
        <Item>
          <h2>listContent配置</h2>
          <Table thead={thead} tbody={listContent} />
        </Item>
        <Item>
          <h4>代码示例</h4>
          <Code title="list" code={code} />
        </Item>
        <Item>
          <List list={lists} name="list" />
        </Item>
      </Items>
    );
  }
}
