import * as React from 'react';
import {str2Dom} from '../tools/dom-tools';
import {$clone,log,uniqueArr,isEqual,memoize} from '../tools/yiru-tools';
import {addClass,removeClass,loading,createScroll} from '../tools/dom-tools';
import {changeRoute} from './changeRouter';

import Brand from '../components/header/brand';
import Nav from '../components/header/nav';
import SideBar from '../components/aside/sidebar';
import PageHeader from '../components/base/pageheader';

const renderComp=async (comp)=>{
  if(comp&&comp.length>0){
    let Com=comp[0].component;
    let asyncCom=comp[0].asyncComponent;
    if(typeof asyncCom==='function'){
      Com=await asyncCom();
      Com=Com.default||Com;
    }
    if(Com){
      if(typeof Com==='string'){
        return str2Dom(Com);
      }
      if(typeof Com==='function'){
        return <Com params={comp[0].params}>
          {renderComp(comp.slice(1))}
        </Com>;
      }
      return Com;
    }else{
      return renderComp(comp.slice(1));
    }
  }
  // return <div>Loading...</div>;
};

const render=async ()=>{
  /*const {current,menu}=changeRoute(props);
  const showSubMenuData=showSubMenu(menu,current,props.navbar);

  // const AsyncComponent=Lazyload(current);
  const AsyncComponent=await renderComp(current);
  // return <AsyncComponent rootData={{menu,current}} />;
  return {
    component:AsyncComponent,
    rootData:{menu,current},
  };*/
};

const popRoute=(v,e)=>{
  e.preventDefault();
  let hasChild=!!(v.child instanceof Array)&&v.child.length>0;
  if(!hasChild||v.canLink){
    history.pushState({route:v.url},null,v.url);
    render();
  }
};

const initListener=()=>{
  const historyEvent=this.props.browserRouter?'popstate':'hashchange';
  window.addEventListener(historyEvent,render,false);
};
const destroyListener=()=>{
  const historyEvent=this.props.browserRouter?'popstate':'hashchange';
  window.removeEventListener(historyEvent,render,false);
};

// show
const showSubMenu=(menu,current,navbar)=>{
  if(!(current instanceof Array)||current.length===0){
    return;
  }
  let navList=[];
  menu.map((v,k)=>{
    if(v.hideParent){
      if(v.url===current[0].url){
        menu=v.child;
      }
      navList.push(v);
    }
  });
  // return {menu:menu,navList:navList};

  if(!(navbar instanceof Object)){
    navbar={};
  }
  if(!(navbar.leftNav instanceof Array)){
    navbar.leftNav=[];
  }
  navbar.leftNav=navbar.leftNav.concat(navList);
  navbar.leftNav=uniqueArr(navbar.leftNav);
  return {menu:menu,navbar:navbar};
};



const aniRoute=(router,props)=>{
  let timer=0;
  document.documentElement.scrollTop?(document.documentElement.scrollTop=0):(document.body.scrollTop=0);
  let {routeAnimate}=props;
  if(routeAnimate!=='down'&&routeAnimate!=='right'&&routeAnimate!=='scale'&&routeAnimate!=='no'){
    routeAnimate='scale';
  }
  router&&(removeClass(router,`menu-ani-in-${routeAnimate}`),addClass(router,`menu-ani-out-${routeAnimate}`));
  clearTimeout(timer);
  timer=setTimeout(()=>{
    router&&(removeClass(router,`menu-ani-out-${routeAnimate}`),addClass(router,`menu-ani-in-${routeAnimate}`));
  },200);
};

const init=(props)=>{
  let {horizontal,homeUrl,browserRouter,theme}=props;
  if(horizontal){
    addClass(document.body,'horizontal');
  }
  let homeUri=homeUrl||'/';
  if(!browserRouter){
    if(homeUri.indexOf('#')===-1){
      homeUri='#'+homeUri;
    }
  }
  const themeCls=theme?`-${theme}`:``;
};

export interface RouterProps {
  routers?:any;
  // frame?:any;
  // stores?:any;
  horizontal?:boolean;
  browserRouter?:boolean;
  // scroll?:boolean;
  // sidebarScroll?:boolean;
  routeAnimate?:string;
  theme?:string;

  brand?:any;
  navbar?:any;
  sidebar?:any;
  rightbar?:any;
  main?:any;
  footer?:any;
  homeUrl?:string;
}

export default class Router extends React.Component<RouterProps>{
  static defaultProps={
    
  };
  static getDerivedStateFromProps(props,state){
    
  }

  componentDidMount(){
    initListener();
    createScroll();
  }
  componentWillUnmount(){
    destroyListener();
    createScroll.distroy();
  }

  render(){

    aniRoute(this.refs.router,this.props);

    if(this.props.horizontal){
      addClass(document.body,'horizontal');
    }
    let homeUri=this.props.homeUrl||'/';
    if(!this.props.browserRouter){
      if(homeUri.indexOf('#')===-1){
        homeUri='#'+homeUri;
      }
    }
    const themeCls=this.props.theme?`-${this.props.theme}`:``;

    return (
      <div ref="router" className={`yrui${themeCls}`}>
        {/*base(this.props)*/}
      </div>
    );
  }
}



















































