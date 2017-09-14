import * as React from 'react';

import {Items,Item,Table,List,Code} from 'yrui';

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
  expr:'内容',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'type',
  expr:'列表类型',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'url',
  expr:'跳转地址',
  type:'string',
  values:'-',
  default:'-',
}];
let listContent=[{
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
  pic:'t1',
  h4:'t1',
  p:'桃花坞里桃花庵',
},{
  pic:'t2',
  h4:'t2',
  p:'桃花坞里桃花庵',
},{
  pic:'t3',
  h4:'t3',
  p:'桃花坞里桃花庵',
},{
  pic:'t4',
  h4:'t4',
  p:'桃花坞里桃花庵',
},{
  pic:'t5',
  h4:'t5',
  p:'桃花坞里桃花庵',
}];

const t=`<List list={lists} name="test" />
  
  let lists=[{
    pic:'t1',
    h4:'t1',
    p:'桃花坞里桃花庵',
  },{
    pic:'t2',
    h4:'t2',
    p:'桃花坞里桃花庵',
  },{
    pic:'t3',
    h4:'t3',
    p:'桃花坞里桃花庵',
  },{
    pic:'t4',
    h4:'t4',
    p:'桃花坞里桃花庵',
  },{
    pic:'t5',
    h4:'t5',
    p:'桃花坞里桃花庵',
  }];
`;


export default class ListDemo extends React.Component {

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
        <Item>
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={t} />
          </div>
        </Item>
        <Item>
          <List list={lists} name="test" />
        </Item>
      </Items>
    );
  }
}
