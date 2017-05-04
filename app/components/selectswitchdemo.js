import * as React from 'react';

import {Select,Autocomplete,Switch,Row,Col,Table} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let select=[{
  key:'style',
  expr:'设置样式',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'data',
  expr:'数据',
  type:'array',
  values:'-',
  default:'-'
},{
  key:'value',
  expr:'选中值',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'readOnly',
  expr:'只读',
  type:'boolean',
  values:'true/false',
  default:'true'
},{
  key:'disabled',
  expr:'禁用',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'getSelectVal',
  expr:'获取选中值',
  type:'function',
  values:'-',
  default:'-'
}];
let switch1=[{
  key:'onText',
  expr:'选中时文本',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'offText',
  expr:'关闭时文本',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'disabled',
  expr:'禁用',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'defaultChecked',
  expr:'默认状态',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'change',
  expr:'获取状态值',
  type:'function',
  values:'-',
  default:'-'
}];
let autocomplete=[{
  key:'data',
  expr:'所有数据',
  type:'array',
  values:'-',
  default:'-'
},{
  key:'placeholder',
  expr:'提示文本',
  type:'string',
  values:'-',
  default:'-'
}];

export default class SelectswitchDemo extends React.Component<any,any> {

  render() {
    return (
      <div>
        <Row gutter={12}>
          <Col span={4}>
            <h2>Select配置</h2>
            <Table thead={thead} tbody={select} />
          </Col>
          <Col span={4}>
            <h2>switch配置</h2>
            <Table thead={thead} tbody={switch1} />
          </Col>
          <Col span={4}>
            <h2>autocomplete配置</h2>
            <Table thead={thead} tbody={autocomplete} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4}>
            <h2>Select</h2>
            <Select data={[1,2,3]} />
          </Col>
          <Col span={4}>
            <h2>Autocomplete</h2>
            <Autocomplete data={[1,2,3,'aa','bb','cc',11,'22']} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4}>
            <h2>Switch配置</h2>
            <Switch onText="开" offText="关" defaultChecked={false} />
          </Col>
          <Col span={4}>
            <h2>Switch配置</h2>
            <Switch onText="√" offText="x" defaultChecked={true} />
          </Col>
          <Col span={4}>
            <h2>Switch配置</h2>
            <Switch onText="√" offText="x" defaultChecked={true} disabled />
          </Col>
        </Row>
      </div>
    )
  };
}
