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
let routers=[{
  key:'routers',
  expr:'路由表',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'frame',
  expr:'框架主体',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'browserRouter',
  expr:'是否是真实路径',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'routeAnimate',
  expr:'路由切换动画',
  type:'string',
  values:'scale/down/right/no',
  default:'scale',
},{
  key:'scroll',
  expr:'使用自定义滚动条',
  type:'boolean',
  values:'true/false',
  default:'true',
}];

const t=`import {App,Demo1,Demo2} from './component';
  const router=[{
    url:'/',
    component: App,
    title:'主页',
    leftIcon:'home',
    rightIcon:'angle-right',
  },{
    url:'javascript:;',
    title:'测试页面',
    leftIcon:'apple',
    rightIcon:'angle-right',
    subMenu:[{
      url:'/demo/demo1',
      component:Demo1,
      leftIcon:'arrow-right',
      title:'demo1',
    },{
      url:'/demo/demo2',
      component:Demo2,
      leftIcon:'arrow-right',
      title:'deno2',
    }]
  },{
    url:'/404',
    component:ErrorPage,
    title:'404',
    noMenu:true, //noMenu为true时，页面不包含frame框架
  }];
  // 页面配置
  import Frame from './components/base/';
  import {routers} from './routers';
  render(<Router routers={sidebarMenu} browserRouter={false} frame={Frame} />, document.getElementById('app'));
  
  browserRouter默认为false使用hash路径.
`;

export default class RouteDemo extends React.Component {

  render() {
    return (
      <Items>
        <Item>
          <div className="textarea">
            <h2>路由配置</h2>
            <p>本框架采用html5的popstate来控制路由切换，配置方便，便于同构。</p>
            <Code title="demo" code={t} />
          </div>
        </Item>
        <Item>
          <Row gutter={12}>
            <Col span={12}>
              <h2>Router配置</h2>
              <Table thead={thead} tbody={routers} />
            </Col>
          </Row>
        </Item>
      </Items>
    );
  }
}
