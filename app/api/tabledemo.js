import * as React from 'react';

import {Row,Col,Table,Code} from 'yrui';
// import thead from './thead';
let thead=[{
  key:'key',
  value:'参数',
  disabled:true,
  colSpan:1,
  rowSpan:1,
  colOpt:{
    index:1,
    colSpan:1,
    rowSpan:1,
  },
},{
  key:'expr',
  value:'说明',
  rowSpan:1,
  colOpt:{
    index:1,
    colSpan:1,
    rowSpan:1,
  },
},{
  key:'type',
  value:'类型',
  rowSpan:1,
  colOpt:{
    index:1,
    colSpan:1,
    rowSpan:1,
  },
},{
  key:'values',
  value:'可选值',
  rowSpan:1,
  colOpt:{
    index:1,
    colSpan:1,
    rowSpan:1,
  },
},{
  key:'default',
  value:'默认值',
  rowSpan:1,
  colOpt:{
    index:1,
    colSpan:1,
    rowSpan:1,
  },
}];
let tbody1=[{
  id:11111,
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false',
}];
let tbody2=[{
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false',
}];
let tbody3=[{
  id:11111,
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false',
},{
  key:'updateRow',
  expr:'编辑事件',
  type:'Function',
  values:'-',
  default:'-',
},{
  key:'deleteRow',
  expr:'删除事件',
  type:'Function',
  values:'-',
  default:'-',
}];
let tbody4=[{
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false',
},{
  key:'more',
  expr:'查看详情事件',
  type:'Function',
  values:'-',
  default:'-',
},{
  key:'deleteRow',
  expr:'删除事件',
  type:'Function',
  values:'-',
  default:'-',
}];
let tbody5=[{
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false',
},{
  key:'more',
  expr:'查看详情事件',
  type:'Function',
  values:'-',
  default:'-',
},{
  key:'deleteRow',
  expr:'删除事件',
  type:'Function',
  values:'-',
  default:'-',
},{
  key:'showHeadbar',
  expr:'显示头部栏',
  type:'Boolean',
  values:'true/false',
  default:'false',
}];
let tbody6=[{
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false',
},{
  key:'more',
  expr:'查看详情事件',
  type:'Function',
  values:'-',
  default:'-',
},{
  key:'deleteRow',
  expr:'删除事件',
  type:'Function',
  values:'-',
  default:'-',
},{
  key:'showFootbar',
  expr:'显示尾部栏',
  type:'Boolean',
  values:'true/false',
  default:'false',
}];
let tbody7=[{
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-',
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false',
},{
  key:'more',
  expr:'查看详情事件',
  type:'Function',
  values:'-',
  default:'-',
},{
  key:'updateRow',
  expr:'编辑事件',
  type:'Function',
  values:'-',
  default:'-',
},{
  key:'deleteRow',
  expr:'删除事件',
  type:'Function',
  values:'-',
  default:'-',
},{
  key:'showHeadbar',
  expr:'显示头部栏',
  type:'Boolean',
  values:'true/false',
  default:'false',
},{
  key:'showFootbar',
  expr:'显示尾部栏',
  type:'Boolean',
  values:'true/false',
  default:'false',
},{
  key:'showToolbar',
  expr:'显示工具栏',
  type:'Boolean',
  values:'true/false',
  default:'false',
},{
  key:'toJson',
  expr:'导出表格数据',
  type:'Function',
  values:'-',
  default:'-',
}];


export default class TableDemo extends React.Component{

  render(){
    return(
      <div>
        <h2>基本表格</h2>
        <Row gutter={12}>
          <Col span={6}>
            <Table thead={thead} tbody={tbody1} />
          </Col>
          <Col span={6}>
            <Table thead={thead} tbody={tbody2} noBorder={true} />
          </Col>
        </Row>
        <h2>可编辑表格</h2>
        <Row gutter={12}>
          <Col span={6}>
            <Table thead={thead} tbody={tbody3} noBorder={false} updateRow={()=>{}} deleteRow={()=>{}} />
          </Col>
          <Col span={6}>
            <Table thead={thead} tbody={tbody4} noBorder={false} deleteRow={()=>{}} more={()=>{}} />
          </Col>
        </Row>
        <h2>表格头尾工具栏</h2>
        <Row gutter={12}>
          <Col span={6}>
            <Table thead={thead} tbody={tbody5} pages={10} noBorder={false} showHeadbar={true} />
          </Col>
          <Col span={6}>
            <Table thead={thead} tbody={tbody6} noBorder={false} showFootbar={true} />
          </Col>
        </Row>
        <h2>表格工具栏</h2>
        <Row gutter={12}>
          <Col span={12}>
            <Table thead={thead} tbody={tbody7} noBorder={false} showHeadbar={true} showFootbar={true} showToolbar={true} more={()=>{}} updateRow={(v)=>{console.log(v);}} deleteRow={()=>{}}/>
          </Col>
        </Row>
      </div>
    );
  }
}
