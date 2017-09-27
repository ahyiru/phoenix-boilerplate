import * as React from 'react';

import {Row,Col,Table,Code,Button,Modal} from 'yrui';

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
let modal=[{
  key:'visible',
  expr:'是否显示',
  type:'boolean',
  values:'true/false',
  default:'true',
},{
  key:'title',
  expr:'标题',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'footer',
  expr:'是否显示底部栏',
  type:'boolean',
  values:'true/false',
  default:'true',
},{
  key:'closeable',
  expr:'是否显示关闭按钮',
  type:'boolean',
  values:'true/false',
  default:'true',
},{
  key:'dragable',
  expr:'是否可拖动',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'maskClosable',
  expr:'是否点击蒙蔽层关闭窗口',
  type:'boolean',
  values:'true/false',
  default:'true',
},{
  key:'size',
  expr:'窗口大小',
  type:'string',
  values:'sm/md/lg',
  default:'sm',
},{
  key:'position',
  expr:'窗口位置',
  type:'string',
  values:'tl/tm/tr/bl/bm/br',
  default:'tm',
},{
  key:'cancel',
  expr:'取消按钮回调函数',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'ok',
  expr:'确定按钮回调函数',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'cancelText',
  expr:'取消按钮文本',
  type:'string',
  values:'-',
  default:'取消',
},{
  key:'okText',
  expr:'确定按钮文本',
  type:'string',
  values:'-',
  default:'确定',
}];

const t=`<Button text="open1" color="info" click={this.show1} />
  <Button text="open2" color="info" click={this.show2} />
  <Modal visible={show1} cancel={this.cancel1} title="11">
    <h2>111</h2>
  </Modal>
  <Modal visible={show2} cancel={this.cancel2} title="12" dragable>
    <h2>222</h2>
  </Modal>`;

export default class ModalDemo extends React.Component {
  state = {
    show1:false,
    show2:false,
  };

  show1=()=>{
    this.setState({
      show1:true,
    });
  };
  show2=()=>{
    this.setState({
      show2:true,
    });
  };
  cancel1=(e)=>{
    this.setState({
      show1:false,
    });
  };
  cancel2=(e)=>{
    this.setState({
      show2:false,
    });
  };
  render() {
    const {show1,show2}=this.state;
    return (
      <div className="">
        <Button text="open1" color="info" click={this.show1} />
        <Button text="可拖动" color="info" click={this.show2} />
        <Modal visible={show1} cancel={this.cancel1} title="11">
          <h2>111</h2>
        </Modal>
        <Modal visible={show2} cancel={this.cancel2} title="12" dragable>
          <h2>222</h2>
        </Modal>
        <Row gutter={12}>
          <Col span={6}>
            <div className="textarea">
              <h4>代码示例</h4>
              <Code title="demo" code={t} />
            </div>
          </Col>
          <Col span={6}>
            <h2>modal配置</h2>
            <Table thead={thead} tbody={modal} />
          </Col>
        </Row>
      </div>
    );
  }
}
