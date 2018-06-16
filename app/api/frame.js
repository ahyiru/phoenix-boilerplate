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
let route=[{
  key:'url',
  expr:'路径',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'component',
  expr:'页面组件',
  type:'object|function',
  values:'-',
  default:'-',
},{
  key:'asyncComponent',
  expr:'按需加载组件',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'name',
  expr:'标题',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'icon',
  expr:'路由左侧图标',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'noMenu',
  expr:'不显示菜单栏',
  type:'boolean',
  values:'-',
  default:'false',
},{
  key:'noFrame',
  expr:'不显框架信息',
  type:'boolean',
  values:'-',
  default:'false',
},{
  key:'child',
  expr:'子路由',
  type:'array',
  values:'-',
  default:'-',
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
  key:'leftNav',
  expr:'头部左侧内容',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'rightNav',
  expr:'头部右侧内容',
  type:'array',
  values:'-',
  default:'-',
},{
  key:'click',
  expr:'返回当前点击nav的数据(click(v))',
  type:'function',
  values:'-',
  default:'-',
},{
  key:'collapse',
  expr:'左侧菜单栏切换事件',
  type:'function',
  values:'-',
  default:'-',
}];
//
let leftNav=[{
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
  key:'drop',
  expr:'下拉菜单内容',
  type:'function|string',
  values:'-',
  default:'-',
},{
  key:'url',
  expr:'菜单链接',
  type:'string',
  values:'-',
  default:'javascript:;',
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
let userinfo=[{
  key:'name',
  expr:'已登陆用户名',
  type:'string',
  values:'-',
  default:'-',
},{
  key:'logo',
  expr:'已登陆用户头像',
  type:'string|object',
  values:'-',
  default:'-',
},{
  key:'email',
  expr:'已登陆用户邮箱',
  type:'string',
  values:'-',
  default:'-',
}];
//
let main=[{
  key:'showBreadcrumb',
  expr:'是否显示面包屑',
  type:'boolean',
  values:'true/false',
  default:'true',
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
  key:'horizontal',
  expr:'是否为水平菜单栏',
  type:'boolean',
  values:'true/false',
  default:'false',
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
  key:'main',
  expr:'主页面头部配置',
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
  key:'theme',
  expr:'用户自定义主题',
  type:'string',
  values:'-',
  default:'-',
}];
//
let others=[{
  key:'rightbar',
  expr:'右侧边栏',
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
  key:'horizontal',
  expr:'是否为水平菜单栏',
  type:'boolean',
  values:'true/false',
  default:'false',
},{
  key:'theme',
  expr:'用户自定义主题',
  type:'string',
  values:'-',
  default:'-',
}];

const t=`const app={
    brand:{
      title:'Phoenix',//
      subtitle:'UI Demo',//
      logo:require('./styles/images/usr.jpg'),//
    },
    navbar:{
      leftNav:null,
      rightNav:null,
      click:(v)=>{console.log(v);},//点击头部菜单事件
      collapse:()=>{console.log('collapse');},//左侧菜单栏切换事件
    },
    sidebar:{
      projectList:null,//菜单项目列表，可忽略
      showSidebarTitle:false,//显示侧边栏标题
      userInfo:null,//用户信息
    },
    rightbar:'<h2>111</h2>',//右侧边栏component
    main:{
      showBreadcrumb:true,//显示面包屑
      showPagetitle:false,//显示头部标题
    },
    footer:'<p>版权所有 &copy; 2017-2020 Phoenix 团队</p>',//底部栏component
    routers:sidebarMenu,//侧边栏，路由
    routeAnimate:'scale',//路由切换动画,设置为'no'取消动画效果
    browserRouter:false,//是否使用真实路径
    horizontal:false,//是否为水平菜单栏
    theme:'',//用户自定义主题
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
              <div className="txt-area">
                <h2>配置</h2>
                {/*<p>brand navbar sidebar rightbar main</p>*/}
                <Code title="demo" code={t} />
              </div>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <h2>route配置</h2>
              <Table thead={thead} tbody={route} />
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <h2>brand配置</h2>
              <Table thead={thead} tbody={brand} />
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <h2>navbar配置</h2>
              <Table thead={thead} tbody={navbar} />
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <h2>sidebar配置</h2>
              <Table thead={thead} tbody={sidebar} />
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <h2>userinfo配置</h2>
              <Table thead={thead} tbody={userinfo} />
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <h2>main配置</h2>
              <Table thead={thead} tbody={main} />
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <h2>leftNav、leftNav配置</h2>
              <Table thead={thead} tbody={leftNav} />
            </Col>
          </Row>
        </Item>
      </Items>
    );
  }
}
