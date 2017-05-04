import * as React from 'react';

import {Items,Item,Row,Col,Table,Code} from 'yrui';


let thead=['ID','参数','说明','类型','可选值','默认值'];
let routers=[{
  key:'routers',
  expr:'路由表',
  type:'array',
  values:'-',
  default:'-'
},{
  key:'frame',
  expr:'框架主体',
  type:'object',
  values:'-',
  default:'-'
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
      title:'demo1'
    },{
      url:'/demo/demo2',
      component:Demo2,
      leftIcon:'arrow-right',
      title:'deno2'
    }]
  }];
  // 页面配置
  import Frame from './components/base/';
  import {routers} from './routers';
  render(<Router routers={routers} frame={Frame} />, document.getElementById('app'));
`;

export default class RouteDemo extends React.Component<any,any> {
  componentDidMount=()=>{
    // const txt=this.refs.p1;
    // txt.innerText=t;
  };

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
    )
  }
}
