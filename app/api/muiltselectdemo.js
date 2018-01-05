import * as React from 'react';
import {Row,Col,Table,Code,Muiltselect} from 'yrui';
import thead from './thead';

let tbody=[{
  key:'data',
  expr:'所有数据',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'value',
  expr:'默认值',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'getSelectVal',
  expr:'获取选中值',
  type:'function',
  values:'-',
  default:'-',
}];
const code=`
const data=[{value:'js'},{value:'css'},{value:'html'},{value:'react'},{value:'angular'},{value:'polymer'},{value:'node'},{value:'webgl'}];
<Muiltselect data={data} value={this.state.value} getSelectVal={this.getSelectVal} />
`;

const data=[{value:'js'},{value:'css'},{value:'html'},{value:'react'},{value:'angular'},{value:'polymer'},{value:'node'},{value:'webgl'}];

export default class MuiltselectDemo extends React.Component{
  state={
    value:['js'],
  };
  getSelectVal=(val)=>{
    console.log(val);
    this.setState({
      value:val,
    });
  };
  render(){
    return(
      <div>
        <Row gutter={8}>
          <Col span={6} sm={8} xs={12}>
            <Muiltselect data={data} value={this.state.value} getSelectVal={this.getSelectVal} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <Code title="Muiltselect" code={code} />
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
