import * as React from 'react';

import {Button,Row,Col,tools} from 'yrui';

import {data} from './data';

import './test.less';

/*const $fetch=tools.$fetch;

$fetch.get('/tttt').then((data)=>{
  console.log(data);
}).catch((e)=>{
  console.log(e);
});
*/

export default class Test extends React.Component {
  state={
    a:1,
  }
  componentDidMount(){

  }

  render() {
    return(
    	<div className="test">
        <h2>hello world</h2>
        <Row gutter={12}>
          <Col span={4}>
            <div style={{'height':'300px','backgroundColor':'#6f0'}} className="aa" />
          </Col>
          <Col span={4}>
            <div style={{'height':'300px','backgroundColor':'#f60'}} />
          </Col>
          <Col span={4}>
            <div style={{'height':'300px','backgroundColor':'#60f'}} />
            <div />
          </Col>
        </Row>
    	</div>
    )
  }
}