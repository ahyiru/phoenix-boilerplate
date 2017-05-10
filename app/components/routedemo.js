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
