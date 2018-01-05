import * as React from 'react';

import {Row,Col,Table,Code,Ul,Progress} from 'yrui';
import thead from './thead';

let uls=[{
  left:'11',
  right:'22',
},{
  left:'11',
  right:'22',
},{
  left:'11',
  right:'22',
},{
  left:'11',
  right:'22',
}];

export default class Color extends React.Component{
  ulclick=(v)=>{
    console.log(v);
  };
  componentDidMount(){
    const c:any=this.refs.colors;
    c.style.cssText='backgroundColor:#3c0;';
    const cssText=`
      text-align:center;
      height:65px;
      line-height:65px;
      border-radius:8px;
      color:#eee;
      font-size:14px;
    `;
    const cc:any=c.getElementsByClassName('c-block');
    for(let i=0,l=cc.length;i<l;i++){
      // cc[i].style.cssText=cssText;
      cc[i].style.textAlign='center';
      cc[i].style.height='65px';
      cc[i].style.lineHeight='65px';
      cc[i].style.borderRadius='8px';
      cc[i].style.color='#eee';
      cc[i].style.fontSize='14px';
    }
  }
  render(){
    return(
      <div ref="colors" className="colors">
        <Row gutter={8}>
          <Col span={3}>
          <div className="c-block bg-purple">purple,<b>#af5cc1</b></div>
          </Col>
          <Col span={3}>
            <div className="c-block bg-green">green,<b>#27c24c</b></div>
          </Col>
          <Col span={3}>
            <div className="c-block bg-red">red,<b>#f05050</b></div>
          </Col>
          <Col span={3}>
            <div className="c-block bg-yellow">yellow,<b>#fad733</b></div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={3}>
            <div className="c-block bg-primary">primary,<b>#7266ba</b></div>
          </Col>
          <Col span={3}>
            <div className="c-block bg-success">success,<b>#45b6af</b></div>
          </Col>
          <Col span={3}>
            <div className="c-block bg-danger">danger,<b>#f3565d</b></div>
          </Col>
          <Col span={3}>
            <div className="c-block bg-warning">warning,<b>#dfba49</b></div>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4}>
            <div className="c-block bg-blue">blue,<b>#23b7e5</b></div>
          </Col>
          <Col span={4}>
            <div className="c-block bg-orange">orange,<b>#ff7f50</b></div>
          </Col>
          <Col span={4}>
            <div className="c-block bg-gray">gray,<b>#666</b></div>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4}>
            <div className="c-block bg-info">info,<b>#24cbe5</b></div>
          </Col>
          <Col span={4}>
            <div className="c-block bg-tip">tip,<b>#ff9655</b></div>
          </Col>
          <Col span={4}>
          <div className="c-block bg-default">default,<b>#999</b></div>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#0c72e6'}}><b>#0c72e6</b></div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#318ffa'}}><b>#318ffa</b></div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#1681fb'}}><b>#1681fb</b></div>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#3abf52'}}><b>#3abf52</b></div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#3c3'}}><b>#6ce581</b></div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#50d768'}}><b>#50d768</b></div>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#e92f29'}}><b>#e92f29</b></div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#ff7470'}}><b>#ff7470</b></div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#ff3e38'}}><b>#ff3e38</b></div>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#edbb20'}}><b>#edbb20</b></div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#ffcd70'}}><b>#ffcd70</b></div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#fecb2e'}}><b>#fecb2e</b></div>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#43b0e2'}}><b>#43b0e2</b></div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#a7e3ff'}}><b>#a7e3ff</b></div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#60c9f9'}}><b>#60c9f9</b></div>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#e7e7e7'}}><b>#e7e7e7</b></div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#fff'}}><b>#fff</b></div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="c-block" style={{backgroundColor:'#f6f6f6'}}><b>#f6f6f6</b></div>
          </Col>
        </Row>
        <Ul uls={uls} click={this.ulclick} />
        <div className="mb mt">
          <div className="progress">
            <div className="progress-line">
              <div className="percent">
              <span>100%</span>
              </div>
            </div>
          </div>
        </div>
        <Col span={6}>
          <h1>h1:Phoenix UI是一套用于快速开发web应用的UI框架。</h1>
          <h2>h2:Phoenix UI是一套用于快速开发web应用的UI框架。</h2>
          <h3>h3:Phoenix UI是一套用于快速开发web应用的UI框架。</h3>
          <h4>h4:Phoenix UI是一套用于快速开发web应用的UI框架。</h4>
          <h5>h5:Phoenix UI是一套用于快速开发web应用的UI框架。</h5>
          <h6>h6:Phoenix UI是一套用于快速开发web应用的UI框架。</h6>
          <p>p:Phoenix UI是一套用于快速开发web应用的UI框架。</p>
        </Col>
        <Progress percent="40.11111" size="" color="danger" bgColor="#333" fbgColor="#f60" txtColor="#fff" bit={2} />
      </div>
    );
  }
}
