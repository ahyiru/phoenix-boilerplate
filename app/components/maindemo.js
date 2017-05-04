import * as React from 'react';

import {Items,Item,Row,Col,Table,Code} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let main=[{
  key:'breadcrumb',
  expr:'面包屑配置',
  type:'array',
  values:'-',
  default:'-'
},{
  key:'hidePageHead',
  expr:'是否隐藏头部内容',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'hidePagetitle',
  expr:'是否显示面包屑上面标题',
  type:'boolean',
  values:'true/false',
  default:'false'
}];

const t=`<Main breadcrumb={current} hidePageHead={true} /*hidePagetitle={false}*/>
    {this.props.children}
  </Main>
`;

export default class MainDemo extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <div className="textarea">
            <h2>Phoenix UI</h2>
            <p>Phoenix UI是一套用于快速开发web应用的UI框架。</p>
            <p>Phoenix UI使用Typescript编写，提供一些简单UI组件及函数库。拓展性强，可配合其它一些组件或插件进行开发，如ant design、jquery等。</p>
            <h2>路由配置</h2>
            <p>本框架采用html5的popstate来控制路由切换，配置方便，便于同构。</p>
            <Code title="demo" code={t} />
          </div>
          <Row>
            <h2>barnd配置</h2>
            <Table thead={thead} tbody={main} noBorder={true} />
          </Row>
        </Item>
      </Items>
    )
  };
}
