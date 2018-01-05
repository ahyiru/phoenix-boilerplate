import * as React from 'react';

import {Row,Col,Table,Code,Icon} from 'yrui';
import thead from './thead';

let tbody=[{
  key:'color',
  expr:'图标颜色',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'size',
  expr:'图标大小',
  type:'string',
  values:'lg/2x/3x/4x/5x',
  default:'-',
},{
  key:'fa',
  expr:'图标icon',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'click',
  expr:'按钮事件',
  type:'function',
  values:'-',
  default:'-',
}];

const code=`
<Row gutter={8}>
  <Col span={12}>
    <Icon fa="user" /><span className="mr"/>
    <Icon fa="user" size="lg" /><span className="mr"/>
    <Icon fa="user" size="2x" /><span className="mr"/>
    <Icon fa="user" size="3x" /><span className="mr"/>
    <Icon fa="user" size="4x" /><span className="mr"/>
    <Icon fa="user" size="5x" color="#f60" /><span className="mr"/>
    <Icon fa="user" color="#f60" />
  </Col>
</Row>
`;

export default class IconDemo extends React.Component{
  state={auth:'yiru'};
  click=()=>{
    console.log('1');
  };
  render(){
    return(
      <div>
        <h2>Icon</h2>
        <Row gutter={8}>
          <Col span={12}>
            <Icon fa="user" /><span className="mr"/>
            <Icon fa="user" size="lg" /><span className="mr"/>
            <Icon fa="user" size="2x" /><span className="mr"/>
            <Icon fa="user" size="3x" /><span className="mr"/>
            <Icon fa="user" size="4x" /><span className="mr"/>
            <Icon fa="user" size="5x" color="#f60" /><span className="mr"/>
            <Icon fa="user" color="#f60" />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <h2>代码示例</h2>
            <Code title="icon" code={code} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <h2>参数说明</h2>
            <Table thead={thead} tbody={tbody} noBorder={true} />
          </Col>
        </Row>
      </div>
    );
  }
}
