import * as React from 'react';
import {Row,Col,Table,Code,Radio} from 'yrui';
import thead from './thead';

let tbody=[{
  key:'name',
  expr:'名字',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'block',
  expr:'是否为块级显示',
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
  key:'value',
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
const code=`
const data=[{value:'js'},{value:'css'},{value:'html'},{value:'react'},{value:'angular'},{value:'polymer'},{value:'node'},{value:'webgl'}];
const data1=[{value:'js'},{value:'css'},{value:'html'}];

<Row gutter={8}>
  <Col span={6} sm={12} xs={12}>
    <Radio opt={data} value={this.state.value} change={this.change} />
  </Col>
  <Col span={6} sm={12} xs={12}>
    <Radio opt={data1} value={this.state.value1} block />
  </Col>
</Row>
`;

const data=[{value:'js'},{value:'css'},{value:'html'},{value:'react'},{value:'angular'},{value:'polymer'},{value:'node'},{value:'webgl'}];
const data1=[{value:'js'},{value:'css'},{value:'html'}];

export default class RadioDemo extends React.Component{
  state={
    value:'js',
    value1:'js',
  };
  change=(val)=>{
    console.log(val);
    this.setState({
      value:val,
    });
  };
  render(){
    return(
      <div>
        <Row gutter={8}>
          <Col span={6} sm={12} xs={12}>
            <Radio opt={data} value={this.state.value} change={this.change} />
          </Col>
          <Col span={6} sm={12} xs={12}>
            <Radio opt={data1} value={this.state.value1} block />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <Code title="Radio" code={code} />
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
