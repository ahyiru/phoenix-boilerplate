import * as React from 'react';

import {Items,Item,Row,Col,Table,Code} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let sidebar=[{
  key:'menu',
  expr:'侧边栏菜单',
  type:'array',
  values:'-',
  default:'-'
},{
  key:'projectList',
  expr:'项目列表',
  type:'array',
  values:'-',
  default:'-'
},{
  key:'hideSidebarTitle',
  expr:'是否隐藏侧边栏title',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'userInfo',
  expr:'用户信息展示',
  type:'object',
  values:'-',
  default:'-'
}];

const t=`import {SideBar,RightBar} from 'yrui';
  <aside>
    <SideBar menu={this.props.sideBarMenu} projectList={projectList} hideSidebarTitle={false} /*userInfo={user}*/ />
    <RightBar>
      <div>...</div>
    </RightBar>
  </aside>
  
  //projectList
  export const projectList=[{
    url:'http://localhost:8001/',
    title:'project1',
    icon:'user'
  },{
    url:'http://localhost:8002/',
    title:'project2',
    icon:'user'
  },{
    url:'http://localhost:8003/',
    title:'project3',
    icon:'user'
  },{
    url:'http://localhost:8004/',
    title:'project4',
    icon:'user'
  },{
    url:'http://localhost:8005/',
    title:'project5',
    icon:'user'
  }];
`;

export default class AsideDemo extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <div className="textarea">
            <h2>侧边栏配置</h2>
            <p>配置侧边显示，如是否显示title、是否展示用户信息等</p>
            <Code title="demo" code={t} />
          </div>
          <Row gutter={8}>
            <Col span={12}>
              <h2>sidebar配置</h2>
              <Table thead={thead} tbody={sidebar} />
            </Col>
          </Row>
        </Item>
      </Items>
    )
  };
}
