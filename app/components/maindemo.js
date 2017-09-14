import * as React from 'react';

import {Items,Item,Row,Col,Table,Code} from 'yrui';

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
let main=[{
  key:'breadcrumb',
  expr:'面包屑配置',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'hidePageHead',
  expr:'是否隐藏头部内容',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'hidePagetitle',
  expr:'是否显示面包屑上面标题',
  type:'boolean',
  values:'true/false',
  default:'false',
}];

const t=`<Main breadcrumb={current} hidePageHead={true} /*hidePagetitle={false}*/>
    {this.props.children}
  </Main>
`;

export default class MainDemo extends React.Component {

  render() {
    return (
      <Items>
        <Item>
          <div className="textarea">
            <h2>主页面配置</h2>
            <p>主页面头部内容、面包屑的配置</p>
            <Code title="demo" code={t} />
          </div>
          <Row>
            <h2>barnd配置</h2>
            <Table thead={thead} tbody={main} noBorder={true} />
          </Row>
        </Item>
      </Items>
    );
  }
}
