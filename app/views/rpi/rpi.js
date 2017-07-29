import * as React from 'react';

import {Switch,Row,Col,tools} from 'yrui';
const {$fetch}=tools;

export default class Rpi extends React.Component {
  componentDidMount(){
    
  }
  switch=(v)=>{
    console.log(v);
    $fetch.post('/rpi/led',{
      data:{status:v},
    });
  };
  render() {
    return(
      <div className="rpi">
        <Row>
          <Col span={6}>
            <h2>树莓派控制LED灯</h2>
            <Switch change={this.switch} />
          </Col>
        </Row>
      </div>
    );
  }
}