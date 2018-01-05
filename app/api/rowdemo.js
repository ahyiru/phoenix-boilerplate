import * as React from 'react';

import {Row,Col,Table,Code} from 'yrui';
import thead from './thead';
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
const code=`
<h2>基本布局</h2>
<Row>
  <Col span={2}>
    <div className="bg-info" style={style}>span=2</div>
  </Col>
  <Col span={4}>
    <div className="bg-purple" style={style}>span=4</div>
  </Col>
  <Col span={6}>
    <div className="bg-danger" style={style}>span=6</div>
  </Col>
</Row>
<h2>分栏偏移</h2>
<Row gutter={0}>
  <Col span={4} offset={2}>
    <div className="bg-blue" style={style}>span=4,offset=2</div>
  </Col>
  <Col span={3} offset={3}>
    <div className="bg-primary" style={style}>span=3,offset=3</div>
  </Col>
</Row>
<h2>分栏间隔</h2>
<Row gutter={8}>
  <Col span={6}>
    <div className="bg-red" style={style}>gutter=8 span=6</div>
  </Col>
  <Col span={6}>
    <div className="bg-yellow" style={style}>gutter=8 span=6</div>
  </Col>
</Row>
<Row gutter={12}>
  <Col span={6}>
    <div className="bg-green" style={style}>gutter=12 span=6</div>
  </Col>
  <Col span={6}>
    <div className="bg-info" style={style}>gutter=12 span=6</div>
  </Col>
</Row>
<h2>多屏适应sm(&lt;992px)、xs(&lt;768px)</h2>
<Row gutter={12}>
  <Col span={4} sm={6} xs={12}>
    <div className="bg-warning" style={style}>span=4 sm=6 xs=12</div>
  </Col>
  <Col span={4} sm={6} xs={12}>
    <div className="bg-orange" style={style}>span=4 sm=6 xs=12</div>
  </Col>
  <Col span={4} sm={6} xs={12}>
    <div className="bg-success" style={style}>span=4 sm=6 xs=12</div>
  </Col>
</Row>
`;


export default class RowDemo extends React.Component{

  render(){
    const style={
      height:'100px',
      lineHeight:'100px',
      textAlign:'center',
      color:'#fff',
      fontSize:'18px',
    };
    return(
      <div>
        <h2>基本布局</h2>
        <Row>
          <Col span={2}>
            <div className="bg-info" style={style}>span=2</div>
          </Col>
          <Col span={4}>
            <div className="bg-purple" style={style}>span=4</div>
          </Col>
          <Col span={6}>
            <div className="bg-danger" style={style}>span=6</div>
          </Col>
        </Row>
        <h2>分栏偏移</h2>
        <Row gutter={0}>
          <Col span={4} offset={2}>
            <div className="bg-blue" style={style}>span=4,offset=2</div>
          </Col>
          <Col span={3} offset={3}>
            <div className="bg-primary" style={style}>span=3,offset=3</div>
          </Col>
        </Row>
        <h2>分栏间隔</h2>
        <Row gutter={8}>
          <Col span={6}>
            <div className="bg-red" style={style}>gutter=8 span=6</div>
          </Col>
          <Col span={6}>
            <div className="bg-yellow" style={style}>gutter=8 span=6</div>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={6}>
            <div className="bg-green" style={style}>gutter=12 span=6</div>
          </Col>
          <Col span={6}>
            <div className="bg-info" style={style}>gutter=12 span=6</div>
          </Col>
        </Row>
        <h2>多屏适应sm(&lt;992px)、xs(&lt;768px)</h2>
        <Row gutter={12}>
          <Col span={4} sm={6} xs={12}>
            <div className="bg-warning" style={style}>span=4 sm=6 xs=12</div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="bg-orange" style={style}>span=4 sm=6 xs=12</div>
          </Col>
          <Col span={4} sm={6} xs={12}>
            <div className="bg-success" style={style}>span=4 sm=6 xs=12</div>
          </Col>
        </Row>

        <Row gutter={8}>
          <Col span={12}>
            <Code title="row,col" code={code} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={612}>
            <Table thead={thead} tbody={tbody} />
          </Col>
        </Row>
      </div>
    );
  }
}
