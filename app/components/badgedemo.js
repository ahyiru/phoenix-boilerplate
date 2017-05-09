import * as React from 'react';

import {Row,Col,Items,Item,Table,Button,Badge,Textarea,Code} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let badge=[{
  key:'style',
  expr:'badge样式',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'text',
  expr:'badge文本',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'showBadge',
  expr:'是否显示Badge',
  type:'boolean',
  values:'true/false',
  default:'true'
}];

let textarea=[{
  key:'style',
  expr:'样式',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'placeholder',
  expr:'提示文本',
  type:'string',
  values:'-',
  default:'-'
}];

const t=`<Badge text="3">
    <Button color="info" text="测试" />
  </Badge>
`;
const t1=`<Textarea placeholder="test" />
`;

export default class CodeDemo extends React.Component<any,any> {

  render() {
    return (
      <div>
        <Row gutter={12}>
          <Col span={6}>
            <Items>
              <Item>
                <Badge text="3">
                  <Button color="info" text="测试" />
                </Badge>
              </Item>
              <Item>
                <div className="textarea">
                  <h4>代码示例</h4>
                  <Code title="demo" code={t} />
                </div>
              </Item>
              <Item>
                <h2>badge配置</h2>
                <Table thead={thead} tbody={badge} />
              </Item>
            </Items>
          </Col>
          <Col span={6}>
            <Items>
              <Item>
                <Textarea placeholder="test" />
              </Item>
              <Item>
                <div className="textarea">
                  <h4>代码示例</h4>
                  <Code title="demo" code={t1} />
                </div>
              </Item>
              <Item>
                <h2>textarea配置</h2>
                <Table thead={thead} tbody={textarea} />
              </Item>
            </Items>
          </Col>
        </Row>
      </div>
    )
  };
}
