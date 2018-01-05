import * as React from 'react';

import {Row,Col,Table,Code,Modal,Button} from 'yrui';
import thead from './thead';
const tbody=[{
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

const code=`
<Row gutter={8}>
  <Col span={6} sm={8} xs={12}>
    <Button text="open1" color="info" click={this.show1} />
    <Button text="open2" color="info" click={this.show2} />
  </Col>
</Row>
<Modal visible={show1} cancel={this.cancel1} title="11">
  <h2 style={{height:'1000px'}}>111</h2>
</Modal>
<Modal visible={show2} cancel={this.cancel2} title="12" dragable>
  <h2>222</h2>
</Modal>
`;

export default class ModalDemo extends React.Component{
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
  
  render(){
    const {show1,show2}=this.state;
    return(
      <div>
        <Row gutter={8}>
          <Col span={6} sm={8} xs={12}>
            <Button text="open1" color="info" click={this.show1} />
            <Button text="open2" color="info" click={this.show2} />
          </Col>
        </Row>
        <Modal visible={show1} cancel={this.cancel1} title="11">
          <h2 style={{height:'1000px'}}>111</h2>
        </Modal>
        <Modal visible={show2} cancel={this.cancel2} title="12" dragable>
          <h2>222</h2>
        </Modal>
        <Row gutter={8}>
          <Col span={12} sm={12} xs={12}>
            <Code title="Badge" code={code} />
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
