import * as React from 'react';

import {Textarea,Badge,Button,Row,Col,Table} from 'yrui';

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
let textarea=[{
  key:'style',
  expr:'样式',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'placeholder',
  expr:'提示文本',
  type:'string',
  values:'-',
  default:'-',
}];
let badge=[{
  key:'style',
  expr:'样式',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'text',
  expr:'显示的数值',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'showBadge',
  expr:'是否显示',
  type:'boolean',
  values:'true/false',
  default:'true',
}];

export default class TextareabadgeDemo extends React.Component {

  render() {
    return (
      <div>
        <Row gutter={12}>
          <Col span={6}>
            <h2>textarea配置</h2>
            <Table thead={thead} tbody={textarea} />
          </Col>
          <Col span={6}>
            <h2>badge配置</h2>
            <Table thead={thead} tbody={badge} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={6}>
            <h2>Textarea</h2>
            <Textarea placeholder="测试页面" />
          </Col>
          <Col span={6}>
            <h2>Badge</h2>
            <Badge text="6">
              <Button color="info" text="测试" />
            </Badge>
          </Col>
        </Row>
      </div>
    );
  }
}
