import Layout from '../components/layout';

import RouteDemo from '../components/routedemo';
import HeadDemo from '../components/headdemo';
import AsideDemo from '../components/asidedemo';
import MainDemo from '../components/maindemo';

import ColDemo from '../components/coldemo';
import Color from '../components/color';
import ButtonDemo from '../components/buttondemo';
import PanelDemo from '../components/paneldemo';
import TableDemo from '../components/tabledemo';
import EchartDemo from '../components/echartdemo';
import InputDemo from '../components/inputdemo';
import FormDemo from '../components/formdemo';

import ItemsDemo from '../components/itemsdemo';
import ListDemo from '../components/listdemo';
import ULDemo from '../components/uldemo';
import TabsDemo from '../components/tabsdemo';

import ProgressDemo from '../components/progressdemo';
import BadgeDemo from '../components/badgedemo';
import CodeDemo from '../components/codedemo';

import RadiocheckboxDemo from '../components/radiocheckboxdemo';
import SelectswitchDemo from '../components/selectswitchdemo';

// import User from './auth/user';
// import Login from './auth/login';
// import Signup from './auth/signup';
// import WeixinAuth from './auth/weixin';

// import ErrorPage from './auth/weixin';

export const sidebarMenu=[{
  url:'/',
  component:Layout,
  title:'主页',
  leftIcon:'home',
  rightIcon:'angle-right',
  open:''
},{
  url:'javascript:;',
  title:'框架配置',
  leftIcon:'cogs',
  rightIcon:'angle-right',
  open:'',
  subMenu:[{
    url:'/frame/route',
    component:RouteDemo,
    leftIcon:'arrow-right',
    title:'路由配置'
  },{
    url:'/frame/head',
    component:HeadDemo,
    leftIcon:'arrow-right',
    title:'头部配置'
  },{
    url:'/frame/aside',
    component:AsideDemo,
    leftIcon:'arrow-right',
    title:'侧边栏配置'
  },{
    url:'/frame/main',
    component:MainDemo,
    leftIcon:'arrow-right',
    title:'主页配置',
  }]
},{
  url:'/component/col',
  component:ColDemo,
  title:'栅格',
  leftIcon:'th',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/color',
  component:Color,
  title:'颜色',
  leftIcon:'fa',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/button',
  component:ButtonDemo,
  title:'按钮',
  leftIcon:'hand-o-right',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/panel',
  component:PanelDemo,
  title:'面板',
  leftIcon:'list',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/table',
  component:TableDemo,
  title:'表格',
  leftIcon:'table',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/chart',
  component:EchartDemo,
  title:'图表',
  leftIcon:'pie-chart',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/form',
  component:FormDemo,
  title:'表单',
  leftIcon:'list-alt',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/input',
  component:InputDemo,
  title:'输入框',
  leftIcon:'keyboard-o',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/tabs',
  component:TabsDemo,
  title:'tab页签',
  leftIcon:'th-large',
  rightIcon:'angle-right',
  open:''
},{
  url:'javascript:;',
  title:'列表',
  leftIcon:'th-list',
  rightIcon:'angle-right',
  open:'',
  subMenu:[{
    url:'/component/lists/items',
    component:ItemsDemo,
    leftIcon:'arrow-right',
    title:'items'
  },{
    url:'/component/lists/list',
    component:ListDemo,
    leftIcon:'arrow-right',
    title:'list'
  },{
    url:'/component/lists/ul',
    component:ULDemo,
    leftIcon:'arrow-right',
    title:'ul'
  }]
},{
  url:'javascript:;',
  title:'文本',
  leftIcon:'text-height',
  rightIcon:'angle-right',
  open:'',
  subMenu:[{
    url:'/component/progress',
    component:ProgressDemo,
    leftIcon:'arrow-right',
    title:'进度条'
  },{
    url:'/component/code',
    component:CodeDemo,
    leftIcon:'arrow-right',
    title:'code文本'
  },{
    url:'/component/badge',
    component:BadgeDemo,
    leftIcon:'arrow-right',
    title:'badge、textarea'
  }]
},{
  url:'javascript:;',
  title:'选择',
  leftIcon:'tasks',
  rightIcon:'angle-right',
  open:'',
  subMenu:[{
    url:'/component/radio',
    component:RadiocheckboxDemo,
    leftIcon:'arrow-right',
    title:'单选、多选'
  },{
    url:'/component/select',
    component:SelectswitchDemo,
    leftIcon:'arrow-right',
    title:'下拉菜单'
  }]
}/*,{
  url:'javascript:;',
  title:'工具',
  leftIcon:'apple',
  rightIcon:'angle-right',
  open:'',
  subMenu:[{
    url:'/component/dnd',
    component:DndDemo,
    leftIcon:'arrow-right',
    title:'拖拽'
  },{
    url:'/component/resize',
    component:ResizeDemo,
    leftIcon:'arrow-right',
    title:'改变窗口大小'
  },{
    url:'/component/backtop',
    component:BacktopDemo,
    leftIcon:'arrow-right',
    title:'返回顶部'
  },{
    url:'/component/other',
    component:OtherDemo,
    leftIcon:'arrow-right',
    title:'其它'
  }]
}*//*,{
  url:'/user',
  component:User,
  title:'用户登录',
  noMenu:true,
  subMenu:[{
    url:'/user/login',
    component:Login,
    title:'登录'
  },{
    url:'/user/signup',
    component:Signup,
    title:'注册'
  }]
},{
  url:'/api',
  component:API,
  title:'API',
  noMenu:true,
},{
  url:'/404',
  component:ErrorPage,
  title:'404',
  noMenu:true,
}*/];















