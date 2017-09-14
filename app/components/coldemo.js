import * as React from 'react';

import './layout.less';

import {Table,Row,Col,Code} from 'yrui';

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
  key:'gutter',
  expr:'在Row上设置栅格间距参数值',
  type:'number',
  values:'8/12/16/20',
  default:'0',
},{
  key:'span',
  expr:'栅格占据的列数',
  type:'number',
  values:'1-12',
  default:'-',
},{
  key:'offset',
  expr:'栅格左侧的间隔格数',
  type:'number',
  values:'1-12',
  default:'0',
},{
  key:'sm',
  expr:'屏幕宽度小于992px时,栅格占据的列数或栅格左侧的间隔格数',
  type:'number|object',
  values:'1-12|{span:1-12,offset:1-12}',
  default:'-',
},{
  key:'xs',
  expr:'屏幕宽度小于768px时,栅格占据的列数或栅格左侧的间隔格数',
  type:'number|object',
  values:'1-12|{span:1-12,offset:1-12}',
  default:'-',
}];

const t=`<h2>基本布局</h2>
  <Row>
    <Col span={2}>
      <div className="l-block">span=2</div>
    </Col>
    <Col span={4}>
      <div className="l-block">span=4</div>
    </Col>
    <Col span={6}>
      <div className="l-block">span=6</div>
    </Col>
  </Row>
  <Row>
    <Col span={3}>
      <div className="l-block">span=3</div>
    </Col>
    <Col span={7}>
      <div className="l-block">span=7</div>
    </Col>
    <Col span={2}>
      <div className="l-block">span=2</div>
    </Col>
  </Row>
  <h2>分栏偏移</h2>
  <Row gutter={0}>
    <Col span={4} offset={2}>
      <div className="l-block">span=4,offset=2</div>
    </Col>
    <Col span={3} offset={3}>
      <div className="l-block">span=3,offset=3</div>
    </Col>
  </Row>
  <Row gutter={0}>
    <Col span={2} offset={2}>
      <div className="l-block">span=2,offset=2</div>
    </Col>
    <Col span={4} offset={1}>
      <div className="l-block">span=4,offset=1</div>
    </Col>
    <Col span={2} offset={1}>
      <div className="l-block">span=2,offset=1</div>
    </Col>
  </Row>
  <h2>分栏间隔</h2>
  <Row gutter={8}>
    <Col span={1}>
      <div className="l-block">span=1</div>
    </Col>
    <Col span={2}>
      <div className="l-block">span=2</div>
    </Col>
    <Col span={6}>
      <div className="l-block">span=6</div>
    </Col>
    <Col span={3}>
      <div className="l-block">span=3</div>
    </Col>
  </Row>
  <Row gutter={8}>
    <Col span={2}>
      <div className="l-block">span=2</div>
    </Col>
    <Col span={5}>
      <div className="l-block">span=5</div>
    </Col>
    <Col span={3}>
      <div className="l-block">span=3</div>
    </Col>
    <Col span={2}>
      <div className="l-block">span=2</div>
    </Col>
  </Row>
  <Row gutter={12}>
    <Col span={4} sm={6} xs={12}>
      <div className="l-block">span=4 sm=6 xs=12</div>
    </Col>
    <Col span={4} sm={6} xs={12}>
      <div className="l-block">span=4 sm=6 xs=12</div>
    </Col>
    <Col span={4} sm={6} xs={12}>
      <div className="l-block">span=4 sm=6 xs=12</div>
    </Col>
  </Row>
`;

export default class ColDemo extends React.Component {

  render() {
    return (
      <div className="layout">
        <h2>基本布局</h2>
        <Row>
          <Col span={2}>
            <div className="l-block">span=2</div>
          </Col>
          <Col span={4}>
            <div className="l-block">span=4</div>
          </Col>
          <Col span={6}>
            <div className="l-block">span=6</div>
          </Col>
        </Row>
        <Row>
          <Col span={3}>
            <div className="l-block">span=3</div>
          </Col>
          <Col span={7}>
            <div className="l-block">span=7</div>
          </Col>
          <Col span={2}>
            <div className="l-block">span=2</div>
          </Col>
        </Row>
        <h2>分栏偏移</h2>
        <Row gutter={0}>
          <Col span={4} offset={2}>
            <div className="l-block">span=4,offset=2</div>
          </Col>
          <Col span={3} offset={3}>
            <div className="l-block">span=3,offset=3</div>
          </Col>
        </Row>
        <Row gutter={0}>
          <Col span={2} offset={2}>
            <div className="l-block">span=2,offset=2</div>
          </Col>
          <Col span={4} offset={1}>
            <div className="l-block">span=4,offset=1</div>
          </Col>
          <Col span={2} offset={1}>
            <div className="l-block">span=2,offset=1</div>
          </Col>
        </Row>
        <h2>分栏间隔</h2>
        <Row gutter={8}>
          <Col span={1}>
            <div className="l-block">span=1</div>
          </Col>
          <Col span={2}>
            <div className="l-block">span=2</div>
          </Col>
          <Col span={6}>
            <div className="l-block">span=6</div>
          </Col>
          <Col span={3}>
            <div className="l-block">span=3</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={2}>
            <div className="l-block">span=2</div>
          </Col>
          <Col span={5}>
            <div className="l-block">span=5</div>
          </Col>
          <Col span={3}>
            <div className="l-block">span=3</div>
          </Col>
          <Col span={2}>
            <div className="l-block">span=2</div>
          </Col>
        </Row>
        <h2>多屏适应sm(&lt;992px)、xs(&lt;768px)</h2>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <div className="l-block">span=4 sm=6 xs=12</div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="l-block">span=4 sm=6 xs=12</div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="l-block">span=4 sm=6 xs=12</div>
          </Col>
        </Row>
        <div className="">
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={t} />
          </div>
          <h2>参数说明</h2>
          <Table thead={thead} tbody={tbody} noBorder={true} />
        </div>
      </div>
    );
  }
}
