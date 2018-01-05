import * as React from 'react';
import {Row,Col,Table,Code,Autocomplete} from 'yrui';
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
  type:'string|number',
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
const data=[{value:'fe-js'},{value:'fe-css'},{value:'fe-html'},{value:'fe-react'},{value:'fe-angular'},{value:'fe-polymer'},{value:'fe-node'},{value:'fe-webgl'}];
<Autocomplete data={data} value={this.state.value} getSelectVal={this.getSelectVal} />
`;

const data=[{value:'fe-js'},{value:'fe-css'},{value:'fe-html'},{value:'fe-react'},{value:'fe-angular'},{value:'fe-polymer'},{value:'fe-node'},{value:'fe-webgl'}];

export default class AutocompleteDemo extends React.Component{
  state={
    value:'fe',
  };
  getSelectVal=(val)=>{
    console.log(val);
    this.setState({
      value:val.value,
    });
  };
  render(){
    return(
      <div>
        <Row gutter={8}>
          <Col span={6} sm={8} xs={12}>
            <Autocomplete data={data} value={this.state.value} getSelectVal={this.getSelectVal} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <Code title="Autocomplete" code={code} />
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
