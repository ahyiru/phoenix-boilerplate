import * as React from 'react';

import {Form,FormItem,Row,Col} from 'yrui';


export default class Waimai extends React.Component {
  state={
    psf:6,
    num:1,
    sf:10,
    yf:10,
    dj:10,
  };
  change=(k,v)=>{
    switch(k){
      case '1':
        this.setState({
          psf:v,
        });
        break;
      case '2':
        this.setState({
          num:v,
        });
        break;
      case '3':
        this.setState({
          sf:v,
        });
        break;
      case '4':
        this.setState({
          yf:v,
        });
        break;
      case '5':
        this.setState({
          dj:v,
        });
        break;
      default:break;
    }
  };

  render() {
    const {psf,num,sf,yf,dj}=this.state;
    const rj=(psf/num).toFixed(2)-0;
    const zk=(sf/yf).toFixed(2)-0;
    const zyf=Math.round(dj*zk+rj);
    return(
    	<div className="waimai">
        <h2>外卖计费器</h2>
        <Form >
          <Row>
            <Col span={1}>
              <FormItem label="餐盒费+配送费" inputOpt={{placeholder:'金额',pright:'➗',value:psf}} change={this.change.bind(this,'1')} />
            </Col>
            <Col span={1}>
              <FormItem label="人数" inputOpt={{placeholder:'3',pright:'=',value:num}} change={this.change.bind(this,'2')} />
            </Col>
            <Col span={1}>
              <FormItem label="人均" inputOpt={{placeholder:'...',disabled:true,value:rj}} />
            </Col>
            <Col span={1} offset={1}>
              <FormItem label="实付" inputOpt={{placeholder:'实付',pright:'➗',value:sf}} change={this.change.bind(this,'3')} />
            </Col>
            <Col span={1}>
              <FormItem label="应付" inputOpt={{placeholder:'应付',pright:'=',value:yf}} change={this.change.bind(this,'4')} />
            </Col>
            <Col span={1}>
              <FormItem label="折扣" inputOpt={{placeholder:'折扣',disabled:true,value:zk}} />
            </Col>
          </Row>
          <Row>
            <Col span={1}>
              <FormItem label="单价" inputOpt={{placeholder:'单价',pright:'x',value:dj}} change={this.change.bind(this,'5')} />
            </Col>
            <Col span={1}>
              <FormItem label="折扣" inputOpt={{placeholder:'折扣',pright:'+',disabled:true,value:zk}} />
            </Col>
            <Col span={1}>
              <FormItem label="餐盒费+配送费" inputOpt={{placeholder:'餐盒饭+配送费',pright:'=',disabled:true,value:rj}} />
            </Col>
            <Col span={1}>
              <FormItem label="应付" inputOpt={{placeholder:'应付',disabled:true,value:zyf}} />
            </Col>
          </Row>
        </Form>
    	</div>
    )
  }
}