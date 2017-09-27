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
    title:'React',//
    subtitle:'UI Demo',//
    logo:require('./styles/images/usr.jpg'),//
    url:'#/',//
  },
  navbar:{
    dropList:dropList,//头部菜单
    showSearchbar:true,//显示搜索框
    showRightTogbar:false,//显示右侧面板切换按钮
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
  routers:sidebarMenu,//侧边栏，路由
  scroll:true,//自定义滚动条，默认不使用
  browserRouter:false,//
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