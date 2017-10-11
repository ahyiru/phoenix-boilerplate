import * as React from 'react';

import {Row,Col,Items,Item,Table,Button,Badge,Textarea,Code} from 'yrui';

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
let badge=[{
  key:'style',
  expr:'badge样式',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'text',
  expr:'badge文本',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'showBadge',
  expr:'是否显示Badge',
  type:'boolean',
  values:'true/false',
  default:'true',
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
},{
  key:'value',
  expr:'文本',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'change',
  expr:'change事件',
  type:'function',
  values:'-',
  default:'function(){}',
},{
  key:'focus',
  expr:'focus事件',
  type:'function',
  values:'-',
  default:'function(){}',
},{
  key:'blur',
  expr:'blur事件',
  type:'function',
  values:'-',
  default:'function(){}',
}];

const t=`<Badge text="3">
    <Button color="info" text="测试" />
  </Badge>
`;
const t1=`<Textarea placeholder="test" />
`;

export default class CodeDemo extends React.Component {

  render() {
    return (
      <Items>
        <Item>
          <Row gutter={12}>
            <Col span={6} sm={12}>
              <Badge text="3">
                <Button color="info" text="测试" />
              </Badge>
            </Col>
            <Col span={6} sm={12}>
              <Textarea placeholder="test" />
            </Col>
          </Row>
        </Item>
        <Item>
          <Row gutter={12}>
            <Col span={6} sm={12}>
              <div className="textarea">
                <h4>代码示例</h4>
                <Code title="demo" code={t} />
              </div>
            </Col>
            <Col span={6} sm={12}>
              <div className="textarea">
                <h4>代码示例</h4>
                <Code title="demo" code={t1} />
              </div>
            </Col>
          </Row>
        </Item>
        <Item>
          <Row gutter={12}>
            <Col span={6} sm={12}>
              <h2>badge配置</h2>
              <Table thead={thead} tbody={badge} />
            </Col>
            <Col span={6} sm={12}>
              <h2>textarea配置</h2>
              <Table thead={thead} tbody={textarea} />
            </Col>
          </Row>
        </Item>
      </Items>
    );
  }
}
