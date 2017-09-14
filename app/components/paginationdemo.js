import * as React from 'react';
import {Items,Item,Table,Code,Row,Col,Pagination} from 'yrui';

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
let pagination=[{
  key:'lists',
  expr:'页数',
  type:'number',
  values:'-',
  default:'-',
},{
  key:'curPage',
  expr:'当前获取选中页',
  type:'function',
  values:'-',
  default:'-',
}];

const t=`<Row gutter={12}>
    <Col span={8}>
      <Pagination lists={20} curPage={this.curPage} />
    </Col>
    <Col span={4}>
      <p>当前选中页数：{this.state.cur}</p>
    </Col>
  </Row>
`;


export default class PaginationDemo extends React.Component {
  state={
    cur:1,
  }
  curPage=(cur)=>{
    this.setState({
      cur:cur,
    });
  };

  render() {
    return (
      <Items>
        <Item>
          <Row gutter={12}>
            <Col span={9}>
              <Pagination lists={20} curPage={this.curPage} />
            </Col>
            <Col span={3}>
              <p>当前选中页数：{this.state.cur}</p>
            </Col>
          </Row>
        </Item>
        <Item>
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={t} />
          </div>
        </Item>
        <Item>
          <h2>pagination配置</h2>
          <Table thead={thead} tbody={pagination} />
        </Item>
      </Items>
    );
  }
}
