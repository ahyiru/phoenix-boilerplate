import * as React from 'react';

import {Row,Col,Table,Code,Input} from 'yrui';
import thead from './thead';

let tbody=[{
  key:'type',
  expr:'输入框类型',
  type:'string',
  values:'text/textarea',
  default:'text',
},{
  key:'name',
  expr:'输入框名称',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'disabled',
  expr:'是否禁用输入',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'readOnly',
  expr:'只读',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'placeholder',
  expr:'提示消息',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'required',
  expr:'是否必填项',
  type:'boolean|string',
  values:'-',
  default:'-',
},{
  key:'min',
  expr:'最小数值',
  type:'string|number',
  values:'-',
  default:'-',
},{
  key:'max',
  expr:'最大数值',
  type:'string|number',
  values:'-',
  default:'-',
},{
  key:'step',
  expr:'数值间隔',
  type:'string|number',
  values:'-',
  default:'-',
},{
  key:'value',
  expr:'输入值',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'defaultValue',
  expr:'默认值',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'ileft',
  expr:'输入框左侧图标',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'iright',
  expr:'输入框右侧图标',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'pleft',
  expr:'左边显示提示信息',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'pright',
  expr:'右边显示提示信息',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'error',
  expr:'输入是否有错误',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'noBorder',
  expr:'输入框是否有边框',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'change',
  expr:'监视输入事件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'irClick',
  expr:'右侧图标点击事件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'prClick',
  expr:'右侧文本点击事件',
  type:'function',
  values:'-',
  default:'-',
}];

const code=`
<Row gutter={12}>
  <Col span={4} sm={6} xs={12}>
    <Input placeholder="default" />
  </Col>
  <Col span={4} sm={6} xs={12}>
    <Input placeholder="pleft" pleft="@" />
  </Col>
  <Col span={4} sm={6} xs={12}>
    <Input placeholder="pleft,pright" pleft="@" pright="**" />
  </Col>
</Row>
<Row gutter={12}>
  <Col span={4} sm={6} xs={12}>
    <Input placeholder="noBorder" noBorder={true} />
  </Col>
  <Col span={4} sm={6} xs={12}>
    <Input placeholder="pright" pright="哈哈" />
  </Col>
  <Col span={4} sm={6} xs={12}>
    <Input placeholder="pleft,iright" pleft="@" iright="user" />
  </Col>
</Row>
<Row gutter={12}>
  <Col span={4} sm={6} xs={12}>
    <Input placeholder="hasError" error={true} />
  </Col>
  <Col span={4} sm={6} xs={12}>
    <Input placeholder="ileft" ileft="lock" iright="user" />
  </Col>
  <Col span={4} sm={6} xs={12}>
    <Input placeholder="change" value={this.state.test} change={this.change.bind(this,'test')} />
  </Col>
</Row>
<Row gutter={12}>
  <Col span={4} sm={6} xs={12}>
    <Input disabled={true} value="disabled" />
  </Col>
  <Col span={4} sm={6} xs={12}>
    <Input placeholder="iright" iright="user" />
  </Col>
  <Col span={4} sm={6} xs={12}>
    <Input placeholder="ileft" ileft="lock" iright="user" pleft="@" pright="**" />
  </Col>
</Row>
`;

export default class InputDemo extends React.Component{
  state={
    test:'',
  };
  change=(key,e)=>{
    this.setState({
      [key]:e.target.value,
    });
  };
  render(){
    return(
      <div>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="default" />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="pleft" pleft="@" />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="pleft,pright" pleft="@" pright="**" />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="noBorder" noBorder={true} />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="pright" pright="哈哈" />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="pleft,iright" pleft="@" iright="user" />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="hasError" error={true} />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="ileft" ileft="lock" iright="user" />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="change" value={this.state.test} change={this.change.bind(this,'test')} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <Input disabled={true} value="disabled" />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="iright" iright="user" />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="ileft" ileft="lock" iright="user" pleft="@" pright="**" />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <h2>代码示例</h2>
            <Code title="input" code={code} />
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
