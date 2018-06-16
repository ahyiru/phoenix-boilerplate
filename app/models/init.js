import {tools} from 'yrui';
const {$storage}=tools;
import * as components from '../api';

import Home from './home';
import Tools from './tools';

const drop='<div><h4>中</h4><h4>英</h4><h4>日</h4></div>';

const leftNav=[{
  // name:'theme',
  icon:'cog',
  animate:'up',
  drop:null,
}];
const rightNav=[{
  name:'清缓',
  icon:'trash-o',
},{
  name:'API',
  icon:'book',
  href:'#/api/layout',
},/*{
  // name:'language',
  icon:'html5',
  animate:'down',
  msg:'',
  drop:drop,
},*/{
  name:$storage.get('user')&&$storage.get('user').name||'profile',
  img:$storage.get('user')&&$storage.get('user').picture||null,
  icon:'user',
  animate:'right',
  // msg:'4',
  drop:null,
}];
const routers=[{
  url:'/',
  component:components['Layout'],
  name:'Home',
  icon:'home',
},{
  url:'/tools',
  component:components['Frame'],
  name:'Tools',
  icon:'cog',
},{
  url:'javascript:;',
  name:'Api',
  icon:'book',
  child:[{
    url:'/api/layout',
    component:components['Layout'],
    name:'layout布局',
  },{
    url:'/api/frame',
    component:components['Frame'],
    name:'框架配置',
  },{
    url:'/api/color',
    component:components['Color'],
    name:'color颜色',
  },{
    url:'/api/tools',
    component:components['Tools'],
    name:'工具',
  },{
    url:'/api/button',
    component:components['ButtonDemo'],
    name:'button按钮',
  },{
    url:'/api/row',
    component:components['RowDemo'],
    name:'row栅格',
  },{
    url:'/api/form',
    component:components['FormDemo'],
    name:'表单',
  },{
    url:'/api/input',
    component:components['InputDemo'],
    name:'input输入框',
  },{
    url:'/api/panel',
    component:components['PanelDemo'],
    name:'面板',
  },{
    url:'/api/items',
    component:components['ItemDemo'],
    name:'items列表',
  },{
    url:'/api/icon',
    component:components['IconDemo'],
    name:'图标',
  },{
    url:'/api/echarts',
    component:components['EchartsDemo'],
    name:'图表',
  },{
    url:'/api/table',
    component:components['TableDemo'],
    name:'表格',
  },{
    url:'/api/tabs',
    component:components['TabsDemo'],
    name:'tabs页签',
  },{
    url:'/api/list',
    component:components['ListDemo'],
    name:'list列表',
  },{
    url:'/api/ul',
    component:components['UlDemo'],
    name:'ul列表',
  },{
    url:'/api/progress',
    component:components['ProgressDemo'],
    name:'进度条',
  },{
    url:'/api/code',
    component:components['CodeDemo'],
    name:'代码文本',
  },{
    url:'/api/tree',
    component:components['TreeDemo'],
    name:'树',
  },{
    url:'/api/pagination',
    component:components['PaginationDemo'],
    name:'分页',
  },{
    url:'/api/textarea',
    component:components['TextareaDemo'],
    name:'文本区域',
  },{
    url:'/api/radio',
    component:components['RadioDemo'],
    name:'单选',
  },{
    url:'/api/checkbox',
    component:components['CheckboxDemo'],
    name:'多选',
  },{
    url:'/api/select',
    component:components['SelectDemo'],
    name:'下拉选择',
  },{
    url:'/api/autocomplete',
    component:components['AutocompleteDemo'],
    name:'自动补齐',
  },{
    url:'/api/muiltselect',
    component:components['MuiltselectDemo'],
    name:'下拉多选',
  },{
    url:'/api/switch',
    component:components['SwitchDemo'],
    name:'切换',
  },{
    url:'/api/badge',
    component:components['BadgeDemo'],
    name:'标记',
  },{
    url:'/api/modal',
    component:components['ModalDemo'],
    name:'模态窗',
  },{
    url:'/api/drawer',
    component:components['DrawerDemo'],
    name:'抽屉柜',
  },{
    url:'/api/date',
    component:components['DateDemo'],
    name:'日期',
  }],
}];

export const app={
  brand:{
    title:'Phoenix',
    subtitle:'UI',
    logo:null
  },
  navbar:{
    leftNav:leftNav,
    rightNav:rightNav,
    click:(v)=>{
      // console.log(v);
      if(v.name==='清缓'){
        // $storage.rm('token');
        $storage.clear();
        location.href='/user/login';
      }
    },
    collapse:()=>{
      // console.log('collapse');
    }
  },
  sidebar:{
    projectList:null,
    showSidebarTitle:false,
    userInfo:null
  },
  rightbar:'<h2>111</h2>',
  main:{
    showBreadcrumb:false,
    showPagetitle:false
  },
  footer:'<p>版权所有 &copy; 2017-2020 Phoenix 团队</p>',
  routers:routers,
  routeAnimate:'scale',
  browserRouter:true,
  horizontal:false
};