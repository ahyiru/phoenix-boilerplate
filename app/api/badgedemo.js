import * as React from 'react';
import {Row,Col,Table,Code,Badge,Button} from 'yrui';
import thead from './thead';

let tbody=[{
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
const code=`
<Badge text="6">
  <Button color="info" text="测试" />
</Badge>
`;

export default class AutocompleteDemo extends React.Component{
  render(){
    return(
      <div>
        <Row gutter={8}>
          <Col span={6} sm={8} xs={12}>
            <Badge text="6">
              <Button color="info" text="测试" />
            </Badge>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <Code title="Badge" code={code} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <Table thead={thead} tbody={tbody} />
          </Col>
        </Row>
      </div>
    );
  }
}


