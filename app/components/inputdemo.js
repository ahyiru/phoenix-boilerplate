import * as React from 'react';

import {Row,Col,Input,Table,Code} from 'yrui';

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
let tbody=[{
  key:'type',
  expr:'输入框类型',
  type:'string',
  values:'text/textarea',
  default:'text',
},{
  key:'disabled',
  expr:'是否禁用输入',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'readOnly',
  expr:'是否是只读',
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
  key:'focus',
  expr:'取得焦点事件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'blur',
  expr:'失去焦点事件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'mouserenter',
  expr:'鼠标移入事件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'mouseleave',
  expr:'鼠标离开事件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'keydown',
  expr:'按下按钮事件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'keyup',
  expr:'松开按钮事件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'click',
  expr:'点击事件',
  type:'function',
  values:'-',
  default:'-',
}];

const t=`<Row gutter={12}>
    <Col span={4}>
      <Input placeholder="default" />
      <Input placeholder="noBorder" noBorder={true} />
      <Input placeholder="hasError" error={true} />
      <Input disabled={true} value="disabled" />
    </Col>
    <Col span={4}>
      <Input placeholder="pleft" pleft="@" />
      <Input placeholder="pright" pright="哈哈" />
      <Input placeholder="ileft" ileft="lock" iright="user" />
      <Input placeholder="iright" iright="user" />
    </Col>
    <Col span={4}>
      <Input placeholder="pleft,pright" pleft="@" pright="**" />
      <Input placeholder="pleft,iright" pleft="@" iright="user" />
      <Input placeholder="change" change={this.change} />
      <Input placeholder="ileft" ileft="lock" iright="user" pleft="@" pright="**" />
    </Col>
  </Row>
`;

export default class InputDemo extends React.Component {
  constructor(props){
    super(props);
  }
  change=(e)=>{
    console.log(e);
  };
  render() {
    return (
      <div className="input">
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="default" />
            <Input placeholder="noBorder" noBorder={true} />
            <Input placeholder="hasError" error={true} />
            <Input disabled={true} value="disabled" />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="pleft" pleft="@" />
            <Input placeholder="pright" pright="哈哈" />
            <Input placeholder="ileft" ileft="lock" iright="user" />
            <Input placeholder="iright" iright="user" />
          </Col>
          <Col span={4} sm={6} xs={12}>
            <Input placeholder="pleft,pright" pleft="@" pright="**" />
            <Input placeholder="pleft,iright" pleft="@" iright="user" />
            <Input placeholder="change" change={this.change} />
            <Input placeholder="ileft" ileft="lock" iright="user" pleft="@" pright="**" />
          </Col>
        </Row>
        <div className="">
          <h2>参数说明</h2>
          <Table thead={thead} tbody={tbody} noBorder={true} />
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={t} />
          </div>
        </div>
      </div>
    );
  }
}
