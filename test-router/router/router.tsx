import * as React from 'react';
import {$clone,log,uniqueArr,isEqual,memoize} from '../tools/yiru-tools';
import {addClass,removeClass,loading,createScroll} from '../tools/dom-tools';
import domEvent from '../tools/domEvent';
domEvent();

import Brand from '../components/header/brand';
import Nav from '../components/header/nav';
import SideBar from '../components/aside/sidebar';
import PageHeader from '../components/base/pageheader';

const getCurrent=(routers,str)=>{
  let data=[],tmp=[];
  const getCur=(menu,str)=>{
    menu.map((v,k)=>{
      let hasChild=v.child instanceof Array&&v.child.length>0;
      let urlArr=str.split('/');
      let hasRoute=v.url.split('/:');
      let matchRoute=str.split('/').length===v.url.split('/').length;
      let isSub=matchRoute&&str.indexOf(hasRoute[0]+'/')===0;
      let isMatch=str===v.url||isSub;
      let item=$clone(v,'child'); //add 20180320
      item.cid=k;
      if(hasChild){
        if(str===v.url&&(v.canLink||v.hideParent)){
          tmp.push(item);
          data=tmp.slice();
          return data;
        }else{
          item.component=null;
          tmp.push(item);
          getCur(v.child,str);
        }
      }else{
        if(isMatch){
          if(isSub){
            item.name=decodeURIComponent(urlArr[urlArr.length-1]);
            item.url=str;
            item.purl=hasRoute[0];
            item.params={[hasRoute[hasRoute.length-1]]:urlArr[urlArr.length-1]};
          }
          tmp.push(item);
          data=tmp.slice();
          return data;
        }else{
          // tmp=[];
        }
      }
    });
    tmp.pop();
    return data;
  };
  return getCur(routers,str);
};

// router
const restRouter=(routers,browserRouter)=>{
  // const menu=$clone(routers);
  const addId=(data,key='')=>{
    key=key?key+'-':key;
    data.map((v,k)=>{
      // k=k===0&&'';
      // v.url=v.url.indexOf('javascript:;')>-1?v.url:'#'+v.url;
      let hasChild=v.child instanceof Array&&v.child.length>0;
      // (!v.url||hasChild)&&(v.url='javascript:;');
      !v.url&&(v.url='javascript:;');
      if(!browserRouter){
        v.url=v.url.indexOf('javascript:;')>-1?v.url:'#'+v.url;
        v.redirect=v.redirect?'#'+v.redirect:v.redirect;
      }
      // !browserRouter&&(v.url=v.url.indexOf('javascript:;')>-1?v.url:'#'+v.url);
      v.id=key+k;
      if(hasChild){
        addId(v.child,v.id);
      }
    });
    return data;
  };
  return addId(routers);
};
// menu
const filterMenu1=(menu)=>{
  return menu.filter((e,i)=>{
    // let isMenu=!e.noMenu||e.pcid;
    let isMenu=!e.noMenu;
    let hasChild=!!(e.child instanceof Array)&&e.child.length>0;
    if(!isMenu){
      return isMenu;
    }
    if(hasChild){
      // 先filter筛选，然后return进行上层筛选
      e.child=filterMenu(e.child);
      // console.log(e.child);
      return e.child;
    }
    return isMenu;
  });
};
const filterMenu=(menu)=>{
  return menu.filter((e,i)=>{
    if(e.noFrame||e.noMenu||e.url.indexOf('/:')>-1){
      return false;
    }
    let hasChild=!!(e.child instanceof Array)&&e.child.length>0;
    if(hasChild){
      e.child=filterMenu(e.child);
    }
    return true;
  });
};

const hideParentRouter=(menu)=>{
  let newMenu=[];
  menu.map((v,k)=>{
    let hasChild=!!(v.child instanceof Array)&&v.child.length>0;
    if(hasChild){
      v.child=hideParentRouter(v.child);
      if(v.hideParent){
        newMenu=newMenu.concat(v.child);
      }else{
        newMenu=newMenu.concat(v);
      }
    }else{
      if(!v.hideParent){
        newMenu=newMenu.concat(v);
      }
    }
  });
  return newMenu;
};
/*const showSubMenu=(menu,current)=>{
  for(let i=0,l=menu.length;i<l;i++){
    if(menu[i].hideParent&&menu[i].url===current[0].url){
      return menu=menu[i].child;
    }
  }
  return menu;
};*/
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

const getCurId=(menu,cur)=>{
  if(cur.length===0){
    return cur;
  }
  let params=cur[cur.length-1].params===undefined;
  if(params){
    return cur.map((v)=>{
      return v.cid;
    }).filter((v)=>{
      return v!==undefined;
    });
  }else{
    let url=cur[cur.length-2].url,cid='';
    const getId=(menu)=>{
      menu.map((e,i)=>{
        let hasChild=!!(e.child instanceof Array)&&e.child.length>0;
        if(e.url===url){
          cid=e.id;
          return false;
        }else{
          if(hasChild){
            getId(e.child);
          }
        }
      });
      return cid;
    };
    return getId(menu).split('-');
  }
};

const getRouter=(routers,str)=>{
  // addid -> current -> filter
  // const router=$clone(routers);
  // const menu0=restRouter(router,browserRouter);
  const current=getCurrent(routers,str);
  const menu=filterMenu(routers);
  // console.log(menu);
  let cur=current.slice();
  const getMenu=(menu,cur)=>{
    menu.map((v,k)=>{
      if(cur[0]&&(v.id===cur[0].id||cur[0].purl===v.url)){
        v.selMenu='active';
        cur=cur.slice(1);
        if(cur.length>0){
          v.open='open';
          return getMenu(v.child,cur);
        }
        // return;// map不能跳出循环
      }
    });
    return menu;
  };
  return {current:current,menu:getMenu(menu,cur)};
};

//popstate
/*window.addEventListener('hashchange',function popRouter(){
  console.log(location);
  console.log(location.pathname);
  myRender();

  // history.pushState({page:1},null,'/user/login');
  // history.replaceState({page:1},null,'/user/login');
},false);*/

const renderComp=async (comp)=>{
  if(comp&&comp.length>0){
    let Com=comp[0].component;
    let asyncCom=comp[0].asyncComponent; //add 20180323
    if(typeof asyncCom==='function'){
      Com=await asyncCom();
      Com=Com.default||Com;
    }
    if(Com){
      if(typeof Com==='string'){
        return <div dangerouslySetInnerHTML={{__html:Com}} />;
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

const lazyLoader=async (current)=>{
  for(let i=0,comp;comp=current[i++];){
    if(typeof comp.asyncComponent==='function'){
      comp.component=await comp.asyncComponent();
      comp.component=comp.component.default||comp.component;
    }
  }
  return current;
};

const getHash=()=>{
  let urls=location.hash.match(/#(\S+)\?/)||location.hash.match(/#(\S+)/),url='#/';
  // let url=location.hash.split('?')[0]||'#/';
  if(!urls){
    history.replaceState({route:'home'},null,url);
  }else{
    url=urls[0];
  }
  return url;
};

const redirect=(menu,browserRouter)=>{
  let url='/404';
  let str=location.pathname;
  if(!browserRouter){
    url='#'+url;
    str=location.hash.split('?')[0];
    if(!str){
      str='#/';
      history.replaceState({route:'home'},null,str);
    }
  }
  const getUrl=(menu,str)=>{
    for(let i=0,item;item=menu[i++];){
      const matchRoute=str.split('/').length===item.url.split('/').length;
      const hasRoute=item.url.split('/:');
      const isSub=matchRoute&&str.indexOf(hasRoute[0]+'/')===0;
      const isMatch=str===item.url||isSub;
      if(isMatch){
        if(item.redirect){
          history.replaceState({route:item.name},null,item.redirect);
          return url=item.redirect;
        }
        return url=str;
      }else{
        const hasChild=item.child instanceof Array&&item.child.length>0;
        if(hasChild){
          getUrl(item.child,str);
        }
      }
    }
  };
  getUrl(menu,str);
  // history.pushState({route:str},null,url);
  if(url.indexOf('/404')>-1){
    history.replaceState({route:str},null,url);
  }
  return url;
};

const changeRoute=(menu)=>{
  const browserRouter=menu.browserRouter;
  let routers=menu.routers||[];
  isUp>2&&(routers=[]);

  const router=$clone(routers);
  const newRouter=restRouter(router,browserRouter);

  const url=redirect(newRouter,browserRouter);

  // return getRouter(newRouter,url);
  return cacheRouter(newRouter,url);
};
const cacheRouter=memoize(getRouter);
/*const changeRoute0=(menu)=>{
  const browserRouter=menu.browserRouter;
  let routers=menu.routers||[];
  isUp>2&&(routers=[]);
  let rootPath='/';
  let errorPath='/404';
  let url=location.pathname;
  if(!browserRouter){
    rootPath='#'+rootPath;
    errorPath='#'+errorPath;
    url=location.hash.split('?')[0];
    if(!url){
      url='#/';
      history.replaceState({route:'home'},null,url);
    }
  }

  let data=getRouter(routers,url,browserRouter);
  if(data.current.length<1&&url!=rootPath){
    history.replaceState({route:url},null,errorPath);
    data=getRouter(routers,errorPath,browserRouter);
  }
  return data;
};*/

export interface RouterProps {
  routers?:any;
  horizontal?:boolean;
  browserRouter?:boolean;
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
export interface RouterState {
  data?:any;
  stateChange?:boolean;
}

export default class Router extends React.Component<RouterProps,RouterState>{
  timer:any=0;
  sidebarWrap=null;
  static defaultProps={
    routers:[],
    browserRouter:false,
    horizontal:false,
    routeAnimate:'scale',
    theme:'default',
    brand:{
      title:'title',
      subtitle:'subtitle',
    },
    navbar:{
      leftNav:[],
    },
  };
  state={
    data:{},
  };

  changeRouter=async ()=>{
    let {routeAnimate}=this.props;
    document.documentElement.scrollTop?(document.documentElement.scrollTop=0):(document.body.scrollTop=0);

    if(routeAnimate!=='down'&&routeAnimate!=='right'&&routeAnimate!=='scale'&&routeAnimate!=='no'){
      routeAnimate='scale';
    }
    const cr=this.refs.router;
    cr&&(removeClass(cr,`menu-ani-in-${routeAnimate}`),addClass(cr,`menu-ani-out-${routeAnimate}`));
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      cr&&(removeClass(cr,`menu-ani-out-${routeAnimate}`),addClass(cr,`menu-ani-in-${routeAnimate}`));
      this.setState({
        data:this.props,
        stateChange:true,
      });
    },200);
  };

  static getDerivedStateFromProps(props,state){
    if(state.stateChange){
      return {
        stateChange:false,
      };
    }
    const data=$clone(props);
    const isEmptyObj=Object.getOwnPropertyNames(state.data).length===0;
    if(!isEmptyObj&&!isEqual(data,state.data)){
      return {
        data:data,
      };
    }
    return null;
  }
  async componentDidMount(){
    // init
    this.changeRouter();

    // this.totopbar=createToTopBar();
    let historyEvent=this.props.browserRouter?'popstate':'hashchange';
    // window.addEventListener('scroll',this.$scroll,false);
    createScroll();
    window.addEventListener(historyEvent,this.changeRouter,false);
  }
  componentWillUnmount(){
    //滚动
    // if(this.props.scroll){
    //   scroll.distroy(document.body);
    // }else{
    // window.removeEventListener('scroll',this.$scroll,false);
    createScroll.distroy();
    // }

    let historyEvent=this.props.browserRouter?'popstate':'hashchange';
    window.removeEventListener(historyEvent,this.changeRouter,false);
    // window.removeEventListener('popstate',this.popRouter,false);
    clearTimeout(this.timer);
  }

  popRoute=(v,e)=>{
    e.preventDefault();
    let hasChild=!!(v.child instanceof Array)&&v.child.length>0;
    if(!hasChild||v.canLink){
      history.pushState({route:v.url},null,v.url);
      this.changeRouter();
    }
  };

  render() {
    const {brand,navbar,sidebar,rightbar,main,footer,theme,browserRouter,homeUrl,horizontal,routers,routeAnimate}=this.props;
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
    const data:any=this.state.data;
    if(!data.routers){
      return false;
    }
    const {current,menu}=changeRoute(data);
    // console.log(current);
    const showSubMenuData=showSubMenu(menu,current,navbar);
    const base=(current)=>{
      if(current.length){
        // const compUrl=current[current.length-1].url;
        // const hasCom=current[0].component;
        // const noMenu=current[0].noMenu;
        // const noMenu=current[current.length-1].noMenu;
        let noFrame=false;
        let noMenu=false;
        for(let i=0,comp;comp=current[i++];){
          if(comp.noFrame){
            noFrame=comp.noFrame;
            break;
          }else if(comp.noMenu){
            noMenu=comp.noMenu;
          }
        }
        /*let noMenu=false;
        current.map((v,k)=>{
          if(v.noMenu){
            return noMenu=v.noMenu;
          }
        });*/
        const AsyncComponent=Lazyload(current);
        /*let nomenuAni='nomenu-ani-out',
            menuAni  ='menu-ani-out';
        if(hasChange){
          nomenuAni='nomenu-ani-in';
          menuAni  ='menu-ani-in';
        }*/
        // console.log(current);
        // if(compUrl.indexOf('#/user')===0||compUrl.indexOf('#/api')===0||compUrl.indexOf('#/404')===0){
        // if(compUrl.indexOf('/user')>-1||compUrl.indexOf('/api')>-1||compUrl.indexOf('/404')>-1){
        // if(noMenu||!Frame){
        if(noFrame){
          return <div className="noframe-page">
            <AsyncComponent />
          </div>;
        }else/*{
          return <Frame current={current} menu={menu} scroll={scroll}>
            {renderComp(current)}
          </Frame>;
        }*/{
          const nom=noMenu?' nomenu':'';
          return <div className="@frame">
            <header>
              <div className="y-header">
                <Brand homeUrl={homeUri} {...brand} />
                <Nav {...showSubMenuData.navbar} hasRightbar={!!rightbar} />
              </div>
            </header>
            {
              !noMenu&&<aside>
                <SideBar menu={showSubMenuData.menu} {...sidebar} popRoute={this.popRoute} />
                {rightbar&&<section className="right-bar" onClick={(e)=>e.stopPropagation()}>
                  {
                    typeof rightbar==='string'?<div dangerouslySetInnerHTML={{__html:rightbar}} />:rightbar
                  }
                </section>}
              </aside>
            }
            <main>
              <section className={`y-main${nom}`}>
                {footer&&<div className="y-footer">
                  {
                    typeof footer==='string'?<div dangerouslySetInnerHTML={{__html:footer}} />:footer
                  }
                </div>}
                <div className="y-container">
                  <PageHeader homeUrl={homeUri} breadcrumb={current} {...main} />
                  <div className="y-pagecontent">
                    <AsyncComponent />
                  </div>
                </div>
              </section>
            </main>
          </div>;
        }
      }else{
        return '空页面!!!';
      }
    };
    return (
      <div ref="router" className={`yrui${themeCls}`}>
        {base(current)}
      </div>
    );
  }
}

export const Lazyload=data=>class extends React.Component<any,any>{
  state={
    childPage:null,
  };
  async componentDidMount(){
    let childPage=await renderComp(data);
    this.setState({
      childPage:childPage,
    });
  }
  componentWillUnmount(){
    //重写组件的setState方法，直接返回空
    this.setState=(state,callback)=>{
      return;
    };
  }
  render(){
    const {childPage}=this.state;
    loading();
    if(childPage){
      loading.distroy();
      return childPage;
    }
    return <div>Loading...</div>;
  }
};


















