import * as React from 'react';

import {Items,Item,Row,Col,Table,Code} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let main=[{
  key:'breadcrumb',
  expr:'面包屑配置',
  type:'array',
  values:'-',
  default:'-'
},{
  key:'hidePagetitle',
  expr:'是否显示面包屑上面标题',
  type:'boolean',
  values:'true/false',
  default:'false'
}];

export default class MainDemo extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <h2>barnd配置</h2>
          <Table thead={thead} tbody={main} noBorder={true} />
        </Item>
      </Items>
    )
  };
}
