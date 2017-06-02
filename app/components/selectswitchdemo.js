import * as React from 'react';

import {Select,Autocomplete,Switch,Row,Col,Table,Code} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let select=[{
  key:'style',
  expr:'设置样式',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'data',
  expr:'数据',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'value',
  expr:'选中值',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'readOnly',
  expr:'只读',
  type:'boolean',
  values:'true/false',
  default:'true',
},{
  key:'disabled',
  expr:'禁用',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'getSelectVal',
  expr:'获取选中值',
  type:'function',
  values:'-',
  default:'-',
}];
let switch1=[{
  key:'onText',
  expr:'选中时文本',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'offText',
  expr:'关闭时文本',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'disabled',
  expr:'禁用',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'defaultChecked',
  expr:'默认状态',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'change',
  expr:'获取状态值',
  type:'function',
  values:'-',
  default:'-',
}];
let autocomplete=[{
  key:'data',
  expr:'所有数据',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'placeholder',
  expr:'提示文本',
  type:'string',
  values:'-',
  default:'-',
}];

const t=`<Select data={[1,2,3]} />
`;
const t1=`<Autocomplete data={[1,2,3,'aa','bb','cc',11,'22']} />
`;
const t2=`<Switch onText={<i className="fa fa-check"></i>} offText={<i className="fa fa-times"></i>} defaultChecked={true} disabled />
`;

export default class SelectswitchDemo extends React.Component {

  render() {
    return (
      <div>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <h2>Select配置</h2>
            <Table thead={thead} tbody={select} />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <h2>switch配置</h2>
            <Table thead={thead} tbody={switch1} />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <h2>autocomplete配置</h2>
            <Table thead={thead} tbody={autocomplete} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={6} xs={12}>
            <h2>Select</h2>
            <Select data={[1,2,3]} />
          </Col>
          <Col span={6} xs={12}>
            <h2>Autocomplete</h2>
            <Autocomplete data={[1,2,3,'aa','bb','cc',11,'22']} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <h2>text</h2>
            <Switch onText="开" offText="关" defaultChecked={false} />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <h2>icon</h2>
            <Switch onText={<i className="fa fa-check"/>} offText={<i className="fa fa-times"/>} defaultChecked={true} />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <h2>disabled</h2>
            <Switch onText={<i className="fa fa-check"/>} offText={<i className="fa fa-times"/>} defaultChecked={true} disabled />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <div className="textarea">
              <h4>代码示例</h4>
              <Code title="Select" code={t} />
            </div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="textarea">
              <h4>代码示例</h4>
              <Code title="Autocomplete" code={t1} />
            </div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="textarea">
              <h4>代码示例</h4>
              <Code title="Switch" code={t2} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
