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
//
let brand=[{
  key:'logo',
  expr:'是否在brand上显示logo',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'title',
  expr:'标题',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'subtitle',
  expr:'副标题',
  type:'string',
  values:'-',
  default:'-',
}];
//
let navbar=[{
  key:'login',
  expr:'用户登录信息',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'showRightTogbar',
  expr:'是否显示右侧边栏切换按钮',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'dropList',
  expr:'头部显示内容',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'dropList.leftList',
  expr:'头部左侧内容',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'dropList.rightList',
  expr:'头部右侧内容',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'showSearchbar',
  expr:'是否显示搜索框',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'click',
  expr:'无dropdown情况下，返回点击nav的名称(click(v))',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'listClick',
  expr:'有dropdown情况下，返回点击nav的名称以及点击列表的内容(listClick(name,v))',
  type:'function',
  values:'-',
  default:'-',
}];
//
let droplist=[{
  key:'name',
  expr:'下拉菜单名',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'icon',
  expr:'下拉菜单图标',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'img',
  expr:'下拉菜单图标',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'showName',
  expr:'显示名称',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'animate',
  expr:'下拉菜单动画',
  type:'string',
  values:'up/down/left/right',
  default:'up',
},{
  key:'msg',
  expr:'下拉菜单消息提示',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'items',
  expr:'下拉菜单内容',
  type:'object',
  values:'-',
  default:'-',
}];
//
let sidebar=[{
  key:'projectList',
  expr:'项目列表',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'showSidebarTitle',
  expr:'是否隐藏侧边栏title',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'userInfo',
  expr:'用户信息展示',
  type:'object',
  values:'-',
  default:'-',
}];
//
let main=[{
  key:'showPagehead',
  expr:'是否隐藏头部内容',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'showPagetitle',
  expr:'是否显示面包屑上面标题',
  type:'boolean',
  values:'true/false',
  default:'false',
}];
//
let routers=[{
  key:'routers',
  expr:'路由表',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'brand',
  expr:'头部brand配置',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'navbar',
  expr:'头部nav配置',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'sidebar',
  expr:'左侧边栏配置',
  type:'object',
  values:'-',
  default:'-',
},{
  key:'rightbar',
  expr:'右侧边栏配置',
  type:'object|string',
  values:'-',
  default:'-',
},{
  key:'footer',
  expr:'底部栏配置',
  type:'object|string',
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
  expr:'主页使用自定义滚动条',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'sidebarScroll',
  expr:'侧边栏使用自定义滚动条',
  type:'boolean',
  values:'true/false',
  default:'true',
}];
//
let others=[{
  key:'rightbar',
  expr:'右侧边栏',
  type:'DOM|string',
  values:'-',
  default:'-',
},{
  key:'footer',
  expr:'底部栏配置',
  type:'object|string',
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
},{
  key:'sidebarScroll',
  expr:'侧边栏使用自定义滚动条',
  type:'boolean',
  values:'true/false',
  default:'true',
}];

const t=`const app={
    brand:{
      title:'React',//
      subtitle:'UI Demo',//
      logo:require('./styles/images/usr.jpg'),//
    },
    navbar:{
      dropList:dropList,//头部菜单
      showSearchbar:true,//显示搜索框
      showRightTogbar:true,//显示右侧面板切换按钮
      login:null,//用户登录信息
      click:(v)=>{console.log(v);},//点击头部菜单事件
      listClick:(v)=>{console.log(v);},//点击头部dropdown子菜单事件
    },
    sidebar:{
      projectList:null,//菜单项目列表，可忽略
      showSidebarTitle:false,//显示侧边栏标题
      userInfo:null,//用户信息
    },
    rightbar:'<h2>111</h2>',//右侧边栏component
    footer:'<p>版权所有 &copy; 2017-2020 云创大前端</p>',//底部栏component
    main:{
      showPagehead:true,//显示main头部
      showPagetitle:false,//显示头部标题
    },
    routers:sidebarMenu,//侧边栏，路由
    routeAnimate:'scale',//路由切换动画,设置为'no'取消动画效果
    scroll:false,//自定义主页滚动条，默认不使用
    sidebarScroll:true,//自定义侧边栏滚动条，默认使用
    browserRouter:false,//
  };

  <Router {...app} />
`;

export default class Frame extends React.Component {

  render() {
    return (
      <Items>
        <Item>
          <Row>
            <Col span={12}>
              <h2>routers配置</h2>
              <Table thead={thead} tbody={routers} />
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <div className="textarea">
                <h2>配置</h2>
                {/*<p>brand navbar sidebar rightbar main</p>*/}
                <Code title="demo" code={t} />
              </div>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <h2>brand配置</h2>
                  <Table thead={thead} tbody={brand} />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <h2>navbar配置</h2>
                  <Table thead={thead} tbody={navbar} />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <h2>sidebar配置</h2>
                  <Table thead={thead} tbody={sidebar} />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <h2>main配置</h2>
                  <Table thead={thead} tbody={main} />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <h2>droplist配置</h2>
                  <Table thead={thead} tbody={droplist} />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <h2>其它配置</h2>
                  <Table thead={thead} tbody={others} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Item>
      </Items>
    );
  }
}
