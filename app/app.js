import * as React from 'react';
import { render } from 'react-dom';

import {Router} from 'yrui';

import Frame from './frame';
import {sidebarMenu} from './models/routers';
import {dropList} from './models/models';
import {dispatchMenu,subscribeMenu,unSubscribeMenu,getMenu} from './models/updateMenu';

import 'font-awesome/css/font-awesome.css';
import 'yrui/lib/yrui.css';

import 'styles/reset.less';

/*const sleep=(time)=>{
  return new Promise(function (resolve, reject) {
    setTimeout(()=>{
      resolve('ok');
    },time);
  });
};
const start=async ()=>{
  let result=await sleep(3000);
  console.log(result);
  return result;
};*/

const app={
  brand:{
    title:'Phoenix',//
    subtitle:'UI',//
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
  main:{
    showPagehead:true,//显示main头部
    showPagetitle:false,//显示头部标题
  },
  footer:'<p>版权所有 &copy; 2017-2020 Phoenix 团队</p>',//底部栏component
  routers:sidebarMenu,//侧边栏，路由
  routeAnimate:'scale',//路由切换动画,设置为'no'取消动画效果
  scroll:false,//自定义主页滚动条，默认不使用
  sidebarScroll:true,//自定义侧边栏滚动条，默认使用
  browserRouter:false,//是否使用真实路径
  horizontal:false,//是否为水平菜单栏
};

// <Router {...app} />

export default class App extends React.Component {
  state={
    menu:getMenu(),
  };
  /*componentDidMount(){
    const {menu}=this.state;
    subscribeMenu((v)=>{
      // console.log(v);
      this.setState({
        menu:v,
      });
    });
    setTimeout(()=>{
      const menu=this.state.menu.slice();
      dispatchMenu(menu);
    },2000);
  }
  componentWillUnmount(){
    unSubscribeMenu();
  }*/
  render(){
    const {menu}=this.state;
    return (
      <Router {...app} />
    );
  }
}