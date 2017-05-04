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
import TabsDemo from '../components/tabsdemo';
import RadiocheckboxDemo from '../components/radiocheckboxdemo';
import SelectswitchDemo from '../components/selectswitchdemo';
import TextareabadgeDemo from '../components/textareabadgedemo';

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
  leftIcon:'apple',
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
  leftIcon:'github-alt',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/color',
  component:Color,
  title:'颜色',
  leftIcon:'github-alt',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/button',
  component:ButtonDemo,
  title:'按钮',
  leftIcon:'github-alt',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/panel',
  component:PanelDemo,
  title:'面板',
  leftIcon:'github-alt',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/table',
  component:TableDemo,
  title:'表格',
  leftIcon:'github-alt',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/chart',
  component:EchartDemo,
  title:'图表',
  leftIcon:'github-alt',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/form',
  component:FormDemo,
  title:'表单',
  leftIcon:'github-alt',
  rightIcon:'angle-right',
  open:''
},{
  url:'/component/input',
  component:InputDemo,
  title:'输入框',
  leftIcon:'github-alt',
  rightIcon:'angle-right',
  open:''
}/*,{
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















