import * as React from 'react';
import {Row,Col,Table,Code,Select} from 'yrui';
import thead from './thead';

let tbody=[{
  key:'opt',
  expr:'所有数据',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'value',
  expr:'默认值',
  type:'string|number',
  values:'-',
  default:'-',
},{
  key:'change',
  expr:'获取选中值',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'style',
  expr:'样式配置',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'readOnly',
  expr:'是否只读',
  type:'boolean',
  values:'true/false',
  default:'true',
},{
  key:'disabled',
  expr:'禁止选择',
  type:'boolean',
  values:'true/false',
  default:'false',
}];
const code=`
const data=[{value:'js'},{value:'css'},{value:'html'},{value:'react'},{value:'angular'},{value:'polymer'},{value:'node'},{value:'webgl'}];

<Select opt={data} value={this.state.value} change={this.change} />
`;

const data=[{value:'js'},{value:'css'},{value:'html'},{value:'react'},{value:'angular'},{value:'polymer'},{value:'node'},{value:'webgl'}];

export default class SelectDemo extends React.Component{
  state={
    value:'js',
  };
  change=(val)=>{
    console.log(val);
    /*this.setState({
      value:val,
    });*/
  };
  render(){
    return(
      <div>
        <Row gutter={8}>
          <Col span={6} sm={8} xs={12}>
            <Select opt={data} value={this.state.value} change={this.change} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <Code title="Checkbox" code={code} />
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
