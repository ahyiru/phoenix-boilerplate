import * as React from 'react';

import {Row,Col,Table,Code,Items,Item} from 'yrui';
import thead from './thead';

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

const code=`
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
`;

export default class ItemsDemo extends React.Component{

  render(){
    return(
      <Items>
        <Item>
          <h2>代码示例</h2>
          <Code title="input" code={code} />
        </Item>
        <Item>
          <Row gutter={8}>
            <Col span={6} sm={12}>
              <h2>参数说明</h2>
              <Table thead={thead} tbody={items} noBorder={true} />
            </Col>
            <Col span={6} sm={12}>
              <h2>参数说明</h2>
              <Table thead={thead} tbody={item} noBorder={true} />
            </Col>
          </Row>
        </Item>
      </Items>
    );
  }
}
