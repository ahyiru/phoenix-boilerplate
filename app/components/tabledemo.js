import * as React from 'react';

import './layout.less';

import {Row,Col,Table,Code} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let tbody1=[{
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false'
}];
let tbody2=[{
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false'
}];
let tbody3=[{
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'editable',
  expr:'是否可编辑',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'updateTableData',
  expr:'编辑事件',
  type:'Function',
  values:'-',
  default:'-'
},{
  key:'deletable',
  expr:'是否可删除',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'deleteTableData',
  expr:'删除事件',
  type:'Function',
  values:'-',
  default:'-'
}];
let tbody4=[{
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'checkable',
  expr:'是否可查看详情',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'moreInfo',
  expr:'查看详情事件',
  type:'Function',
  values:'-',
  default:'-'
},{
  key:'deletable',
  expr:'是否可删除',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'deleteTableData',
  expr:'删除事件',
  type:'Function',
  values:'-',
  default:'-'
}];
let tbody5=[{
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'checkable',
  expr:'是否可查看详情',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'moreInfo',
  expr:'查看详情事件',
  type:'Function',
  values:'-',
  default:'-'
},{
  key:'deletable',
  expr:'是否可删除',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'deleteTableData',
  expr:'删除事件',
  type:'Function',
  values:'-',
  default:'-'
},{
  key:'showHeadbar',
  expr:'显示头部栏',
  type:'Boolean',
  values:'true/false',
  default:'false'
}];
let tbody6=[{
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'checkable',
  expr:'是否可查看详情',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'moreInfo',
  expr:'查看详情事件',
  type:'Function',
  values:'-',
  default:'-'
},{
  key:'deletable',
  expr:'是否可删除',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'deleteTableData',
  expr:'删除事件',
  type:'Function',
  values:'-',
  default:'-'
},{
  key:'showFootbar',
  expr:'显示尾部栏',
  type:'Boolean',
  values:'true/false',
  default:'false'
}];
let tbody7=[{
  key:'thead',
  expr:'表头',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'tbody',
  expr:'表格数据',
  type:'Array',
  values:'-',
  default:'-'
},{
  key:'noBorder',
  expr:'是否有边框',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'checkable',
  expr:'是否可查看详情',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'moreInfo',
  expr:'查看详情事件',
  type:'Function',
  values:'-',
  default:'-'
},{
  key:'editable',
  expr:'是否可编辑',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'updateTableData',
  expr:'编辑事件',
  type:'Function',
  values:'-',
  default:'-'
},{
  key:'deletable',
  expr:'是否可删除',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'deleteTableData',
  expr:'删除事件',
  type:'Function',
  values:'-',
  default:'-'
},{
  key:'showHeadbar',
  expr:'显示头部栏',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'showFootbar',
  expr:'显示尾部栏',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'showToolbar',
  expr:'显示工具栏',
  type:'Boolean',
  values:'true/false',
  default:'false'
},{
  key:'toJson',
  expr:'导出表格数据',
  type:'Function',
  values:'-',
  default:'-'
}];

const t=`<h2>基本表格</h2>
  <Row gutter={12}>
    <Col span={6}>
      <Table thead={thead} tbody={tbody1} />
    </Col>
    <Col span={6}>
      <Table thead={thead} tbody={tbody2} noBorder={true} />
    </Col>
  </Row>
`;
const t1=`<h2>可编辑表格</h2>
  <Row gutter={12}>
    <Col span={6}>
      <Table thead={thead} tbody={tbody3} noBorder={false} editable={true} deletable={true} />
    </Col>
    <Col span={6}>
      <Table thead={thead} tbody={tbody4} noBorder={false} deletable={true} checkable={true} />
    </Col>
  </Row>
`;
const t2=`<h2>表格头尾工具栏</h2>
  <Row gutter={12}>
    <Col span={6}>
      <Table thead={thead} tbody={tbody5} noBorder={false} showHeadbar={true} />
    </Col>
    <Col span={6}>
      <Table thead={thead} tbody={tbody6} noBorder={false} showFootbar={true} />
    </Col>
  </Row>
`;
const t3=`<h2>表格工具栏</h2>
  <Row gutter={12}>
    <Col span={12}>
      <Table thead={thead} tbody={tbody7} noBorder={false} showHeadbar={true} showFootbar={true} showToolbar={true} editable={true} deletable={true} checkable={true} />
    </Col>
  </Row>
`;

export default class TableDemo extends React.Component<any,any> {

  render() {
    return (
      <div className="tabledemo">
        <h2>基本表格</h2>
        <div className="textarea">
          <h4>代码示例</h4>
          <Code title="demo" code={t} />
        </div>
        <Row gutter={12}>
          <Col span={6}>
            <Table thead={thead} tbody={tbody1} />
          </Col>
          <Col span={6}>
            <Table thead={thead} tbody={tbody2} noBorder={true} />
          </Col>
        </Row>
        <h2>可编辑表格</h2>
        <div className="textarea">
          <h4>代码示例</h4>
          <Code title="demo" code={t1} />
        </div>
        <Row gutter={12}>
          <Col span={6}>
            <Table thead={thead} tbody={tbody3} noBorder={false} editable={true} deletable={true} />
          </Col>
          <Col span={6}>
            <Table thead={thead} tbody={tbody4} noBorder={false} deletable={true} checkable={true} />
          </Col>
        </Row>
        <h2>表格头尾工具栏</h2>
        <div className="textarea">
          <h4>代码示例</h4>
          <Code title="demo" code={t2} />
        </div>
        <Row gutter={12}>
          <Col span={6}>
            <Table thead={thead} tbody={tbody5} noBorder={false} showHeadbar={true} />
          </Col>
          <Col span={6}>
            <Table thead={thead} tbody={tbody6} noBorder={false} showFootbar={true} />
          </Col>
        </Row>
        <h2>表格工具栏</h2>
        <div className="textarea">
          <h4>代码示例</h4>
          <Code title="demo" code={t3} />
        </div>
        <Row gutter={12}>
          <Col span={12}>
            <Table thead={thead} tbody={tbody7} noBorder={false} showHeadbar={true} showFootbar={true} showToolbar={true} editable={true} deletable={true} checkable={true} />
          </Col>
        </Row>
      </div>
    )
  };
}
