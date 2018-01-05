import * as React from 'react';

import {Row,Col,Table,Code,Pagination,Items,Item} from 'yrui';
import thead from './thead';
const tbody=[{
  key:'total',
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

const code=`
<Row gutter={12}>
  <Col span={8}>
    <Pagination total={20} curPage={this.curPage} />
  </Col>
  <Col span={4}>
    <p>当前选中页数：{this.state.cur}</p>
  </Col>
</Row>
`;

export default class PaginationDemo extends React.Component{
  state={
    cur:1,
  };
  curPage=(cur)=>{
    this.setState({
      cur:cur,
    });
  };

  render(){
    return(
      <Items>
        <Item>
          <Row gutter={12}>
            <Col span={9}>
              <Pagination total={20} curPage={this.curPage} />
            </Col>
            <Col span={3}>
              <p>当前选中页数：{this.state.cur}</p>
            </Col>
          </Row>
        </Item>
        <Item>
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="Pagination" code={code} />
          </div>
        </Item>
        <Item>
          <h2>pagination配置</h2>
          <Table thead={thead} tbody={tbody} />
        </Item>
      </Items>
    );
  }
}
