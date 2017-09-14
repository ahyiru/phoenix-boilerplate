import * as React from 'react';

import {Switch,Row,Col,tools} from 'yrui';
const {$fetch}=tools;

export default class Rpi extends React.Component {
  componentDidMount(){
    
  }
  state={
    status:'关闭',
  };
  switch=(v)=>{
    console.log(v);
    $fetch.post('/rpi/led',{
      data:{status:v},
    });
    this.setState({
      status:v?'开启':'关闭',
    });
  };
  render() {
    return(
      <div className="rpi">
        <Row>
          <Col span={6}>
            <h4>树莓派智能家居控制</h4>
            <p><b>房间1LED灯:</b></p>
            <div>
              <Switch change={this.switch} />
              <i> 当前状态：<b className="red">{this.state.status}</b></i>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}