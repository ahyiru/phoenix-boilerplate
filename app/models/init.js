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
  title:'Home',
  leftIcon:'home',
},{
  url:'/tools',
  component:components['Frame'],
  title:'Tools',
  leftIcon:'cog',
},{
  url:'javascript:;',
  title:'Api',
  leftIcon:'book',
  child:[{
    url:'/api/layout',
    component:components['Layout'],
    title:'layout布局',
  },{
    url:'/api/frame',
    component:components['Frame'],
    title:'框架配置',
  },{
    url:'/api/color',
    component:components['Color'],
    title:'color颜色',
  },{
    url:'/api/tools',
    component:components['Tools'],
    title:'工具',
  },{
    url:'/api/button',
    component:components['ButtonDemo'],
    title:'button按钮',
  },{
    url:'/api/row',
    component:components['RowDemo'],
    title:'row栅格',
  },{
    url:'/api/form',
    component:components['FormDemo'],
    title:'表单',
  },{
    url:'/api/input',
    component:components['InputDemo'],
    title:'input输入框',
  },{
    url:'/api/panel',
    component:components['PanelDemo'],
    title:'面板',
  },{
    url:'/api/items',
    component:components['ItemDemo'],
    title:'items列表',
  },{
    url:'/api/icon',
    component:components['IconDemo'],
    title:'图标',
  },{
    url:'/api/echarts',
    component:components['EchartsDemo'],
    title:'图表',
  },{
    url:'/api/table',
    component:components['TableDemo'],
    title:'表格',
  },{
    url:'/api/tabs',
    component:components['TabsDemo'],
    title:'tabs页签',
  },{
    url:'/api/list',
    component:components['ListDemo'],
    title:'list列表',
  },{
    url:'/api/ul',
    component:components['UlDemo'],
    title:'ul列表',
  },{
    url:'/api/progress',
    component:components['ProgressDemo'],
    title:'进度条',
  },{
    url:'/api/code',
    component:components['CodeDemo'],
    title:'代码文本',
  },{
    url:'/api/tree',
    component:components['TreeDemo'],
    title:'树',
  },{
    url:'/api/pagination',
    component:components['PaginationDemo'],
    title:'分页',
  },{
    url:'/api/textarea',
    component:components['TextareaDemo'],
    title:'文本区域',
  },{
    url:'/api/radio',
    component:components['RadioDemo'],
    title:'单选',
  },{
    url:'/api/checkbox',
    component:components['CheckboxDemo'],
    title:'多选',
  },{
    url:'/api/select',
    component:components['SelectDemo'],
    title:'下拉选择',
  },{
    url:'/api/autocomplete',
    component:components['AutocompleteDemo'],
    title:'自动补齐',
  },{
    url:'/api/muiltselect',
    component:components['MuiltselectDemo'],
    title:'下拉多选',
  },{
    url:'/api/switch',
    component:components['SwitchDemo'],
    title:'切换',
  },{
    url:'/api/badge',
    component:components['BadgeDemo'],
    title:'标记',
  },{
    url:'/api/modal',
    component:components['ModalDemo'],
    title:'模态窗',
  },{
    url:'/api/date',
    component:components['DateDemo'],
    title:'日期',
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
        location.href='#/user/login';
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
    showPagehead:false,
    showPagetitle:false
  },
  footer:'<p>版权所有 &copy; 2017-2020 Phoenix 团队</p>',
  routers:routers,
  routeAnimate:'scale',
  browserRouter:false,
  horizontal:false
};