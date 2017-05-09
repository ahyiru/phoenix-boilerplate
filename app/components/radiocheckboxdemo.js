import * as React from 'react';

import {Radio,Checkbox,Items,Item,Row,Col,Table,Code} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let radio=[{
  key:'name',
  expr:'名字',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'inline',
  expr:'是否在一行显示',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'opt',
  expr:'radio/checkbox集合',
  type:'array',
  values:'-',
  default:'-'
},{
  key:'checked',
  expr:'选中的表值',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'change',
  expr:'切换选项事件',
  type:'function',
  values:'-',
  default:'-'
}];

const t=`<Row gutter={12}>
    <Col span={6}>
      <h2>radio</h2>
      <Radio name="radio1" opt={[{label:'radio1'},{label:'radio2'},{label:'radio3'}]} />
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

export default class RadiocheckboxDemo extends React.Component<any,any> {

  render() {
    return (
      <div>
        <Row gutter={12}>
          <Col span={6}>
            <h2>radio配置</h2>
            <Table thead={thead} tbody={radio} />
          </Col>
          <Col span={6}>
            <h2>checkbox配置</h2>
            <Table thead={thead} tbody={radio} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={6}>
            <h2>radio</h2>
            <Radio name="radio1" opt={[{label:'radio1'},{label:'radio2'},{label:'radio3'}]} />
          </Col>
          <Col span={6}>
            <h2>radio inline</h2>
            <Radio name="radio2" opt={[{label:'radio1'},{label:'radio2'},{label:'radio3'}]} inline={true} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={6}>
            <h2>checkbox</h2>
            <Checkbox opt={[{label:'checkbox1'},{label:'checkbox2'},{label:'checkbox3'}]} />
          </Col>
          <Col span={6}>
            <h2>checkbox inline</h2>
            <Checkbox opt={[{label:'checkbox1'},{label:'checkbox2'},{label:'checkbox3'}]} inline={true} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={6}>
            <div className="textarea">
              <h4>代码示例</h4>
              <Code title="Radio" code={t} />
            </div>
          </Col>
          <Col span={6}>
            <div className="textarea">
              <h4>代码示例</h4>
              <Code title="Checkbox" code={t1} />
            </div>
          </Col>
        </Row>
      </div>
    )
  };
}
