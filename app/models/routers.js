import Layout from '../components/layout';

import RouteDemo from '../components/routedemo';
import HeadDemo from '../components/headdemo';
import AsideDemo from '../components/asidedemo';
import MainDemo from '../components/maindemo';

import ColDemo from '../components/coldemo';
import ButtonDemo from '../components/buttondemo';
import PanelDemo from '../components/paneldemo';
import TableDemo from '../components/tabledemo';
import EchartDemo from '../components/echartdemo';
import InputDemo from '../components/inputdemo';
import FormDemo from '../components/formdemo';
import TreeDemo from '../components/treedemo';
import PaginationDemo from '../components/paginationdemo';

import ItemsDemo from '../components/itemsdemo';
import ListDemo from '../components/listdemo';
import ULDemo from '../components/uldemo';
import TabsDemo from '../components/tabsdemo';

import ProgressDemo from '../components/progressdemo';
import BadgeDemo from '../components/badgedemo';
import CodeDemo from '../components/codedemo';

import RadiocheckboxDemo from '../components/radiocheckboxdemo';
import SelectswitchDemo from '../components/selectswitchdemo';

import Tools from '../components/tools';

import Preview from '../views/preview/preview';

import Test from '../views/test/test';
import Hello from '../views/test/hello';
import Waimai from '../views/test/waimai';

/*const comp={
  layout:Layout,
};*/

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
},{
  url:'javascript:;',
  title:'框架配置',
  leftIcon:'cogs',
  subMenu:[{
    url:'/frame/route',
    component:RouteDemo,
    title:'路由配置',
  },{
    url:'/frame/head',
    component:HeadDemo,
    title:'头部配置',
  },{
    url:'/frame/aside',
    component:AsideDemo,
    title:'侧边栏配置',
  },{
    url:'/frame/main',
    component:MainDemo,
    title:'主页配置',
  }],
},{
  url:'/component/col',
  component:ColDemo,
  title:'栅格',
  leftIcon:'th',
},{
  url:'/component/button',
  component:ButtonDemo,
  title:'按钮',
  leftIcon:'hand-o-right',
},{
  url:'/component/panel',
  component:PanelDemo,
  title:'面板',
  leftIcon:'list',
},{
  url:'/component/table',
  component:TableDemo,
  title:'表格',
  leftIcon:'table',
},{
  url:'/component/chart',
  component:EchartDemo,
  title:'图表',
  leftIcon:'pie-chart',
},{
  url:'/component/form',
  component:FormDemo,
  title:'表单',
  leftIcon:'list-alt',
},{
  url:'/component/input',
  component:InputDemo,
  title:'输入框',
  leftIcon:'keyboard-o',
},{
  url:'/component/tabs',
  component:TabsDemo,
  title:'tab页签',
  leftIcon:'th-large',
},{
  url:'javascript:;',
  title:'列表',
  leftIcon:'th-list',
  subMenu:[{
    url:'/component/lists/items',
    component:ItemsDemo,
    title:'items',
  },{
    url:'/component/lists/list',
    component:ListDemo,
    title:'list',
  },{
    url:'/component/lists/ul',
    component:ULDemo,
    title:'ul',
  }],
},{
  url:'javascript:;',
  title:'文本',
  leftIcon:'text-height',
  subMenu:[{
    url:'/component/progress',
    component:ProgressDemo,
    title:'进度条',
  },{
    url:'/component/code',
    component:CodeDemo,
    title:'code文本',
  },{
    url:'/component/badge',
    component:BadgeDemo,
    title:'badge、textarea',
  }],
},{
  url:'javascript:;',
  title:'选择',
  leftIcon:'tasks',
  subMenu:[{
    url:'/component/radio',
    component:RadiocheckboxDemo,
    title:'单选、多选',
  },{
    url:'/component/select',
    component:SelectswitchDemo,
    title:'下拉菜单',
  }],
},{
  url:'/component/tree',
  component:TreeDemo,
  title:'树',
  leftIcon:'tree',
},{
  url:'/component/pagination',
  component:PaginationDemo,
  title:'分页',
  leftIcon:'step-forward',
},{
  url:'/component/tools',
  component:Tools,
  title:'工具',
  leftIcon:'wrench',
  /*subMenu:[{
    url:'/component/dnd',
    component:DndDemo,
    title:'拖拽'
  },{
    url:'/component/resize',
    component:ResizeDemo,
    title:'改变窗口大小'
  },{
    url:'/component/backtop',
    component:BacktopDemo,
    title:'返回顶部'
  },{
    url:'/component/other',
    component:OtherDemo,
    title:'其它'
  }]*/
},/*{
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
}*/{
  url:'/preview',
  component:Preview,
  noMenu:true,
},{
  url:'/test',
  component:Test,
  title:'test',
  noMenu:false,
  leftIcon:'address-book',
},{
  url:'/hello',
  component:Hello,
  title:'hello world',
  noMenu:false,
  leftIcon:'address-book',
},{
  url:'/waimai',
  component:Waimai,
  title:'外卖',
  noMenu:false,
  leftIcon:'address-book',
}];















