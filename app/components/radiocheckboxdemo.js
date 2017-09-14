import * as React from 'react';

import {Radio,Checkbox,Row,Col,Table,Code} from 'yrui';

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
let radio=[{
  key:'name',
  expr:'名字',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'inline',
  expr:'是否在一行显示',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'opt',
  expr:'radio/checkbox集合',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'checked',
  expr:'选中的表值',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'change',
  expr:'切换选项事件',
  type:'function',
  values:'-',
  default:'-',
}];

const t=`<Row gutter={12}>
    <Col span={6}>
      <h2>radio</h2>
      <Radio name="radio1" opt={[{label:'radio1',value:1},{label:'radio2',value:2},{label:'radio3'}]} />
    </Col>
    <Col span={6}>
      <h2>radio inline</h2>
      <Radio name="radio2" opt={[{label:'radio1'},{label:'radio2'},{label:'radio3'}]} inline={true} />
    </Col>
  </Row>
`;
const t1=`<Row gutter={12}>
    <Col span={6}>
      <h2>checkbox</h2>
      <Checkbox opt={[{label:'checkbox1'},{label:'checkbox2'},{label:'checkbox3'}]} />
    </Col>
    <Col span={6}>
      <h2>checkbox inline</h2>
      <Checkbox opt={[{label:'checkbox1'},{label:'checkbox2'},{label:'checkbox3'}]} inline={true} />
    </Col>
  </Row>
`;

export default class RadiocheckboxDemo extends React.Component {

  render() {
    return (
      <div>
        <Row gutter={12}>
          <Col span={6} sm={12}>
            <h2>radio配置</h2>
            <Table thead={thead} tbody={radio} />
          </Col>
          <Col span={6} sm={12}>
            <h2>checkbox配置</h2>
            <Table thead={thead} tbody={radio} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={6} sm={12}>
            <h2>radio</h2>
            <Radio name="radio1" opt={[{label:'radio1',value:1},{label:'radio2',value:2},{label:'radio3',value:3}]} />
          </Col>
          <Col span={6} sm={12}>
            <h2>radio inline</h2>
            <Radio name="radio2" opt={[{label:'radio1',value:1},{label:'radio2',value:2},{label:'radio3',value:3}]} inline={true} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={6} sm={12}>
            <h2>checkbox</h2>
            <Checkbox opt={[{label:'checkbox1',value:1},{label:'checkbox2',value:2},{label:'checkbox3',value:3}]} />
          </Col>
          <Col span={6} sm={12}>
            <h2>checkbox inline</h2>
            <Checkbox opt={[{label:'checkbox1',value:1},{label:'checkbox2',value:2},{label:'checkbox3',value:3}]} inline={true} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={6} sm={12}>
            <div className="textarea">
              <h4>代码示例</h4>
              <Code title="Radio" code={t} />
            </div>
          </Col>
          <Col span={6} sm={12}>
            <div className="textarea">
              <h4>代码示例</h4>
              <Code title="Checkbox" code={t1} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
