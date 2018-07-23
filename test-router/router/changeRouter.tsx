import {$clone,log,uniqueArr,isEqual,memoize} from '../tools/yiru-tools';

// reset
const restRouter=(routers,browserRouter)=>{
  const addId=(data,key='')=>{
    key=key?key+'-':key;
    data.map((v,k)=>{
      let hasChild=v.child instanceof Array&&v.child.length>0;
      !v.url&&(v.url='javascript:;');
      if(!browserRouter){
        v.url=v.url.indexOf('javascript:;')>-1?v.url:'#'+v.url;
        v.redirect=v.redirect?'#'+v.redirect:v.redirect;
      }
      v.id=key+k;
      if(hasChild){
        addId(v.child,v.id);
      }
    });
    return data;
  };
  return addId(routers);
};
// current
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
// filter
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
// get router
const getRouter=(routers,str)=>{
  const current=getCurrent(routers,str);
  const menu=filterMenu(routers);
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
      }
    });
    return menu;
  };
  return {current:current,menu:getMenu(menu,cur)};
};
// redirect
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
  if(url.indexOf('/404')>-1){
    history.replaceState({route:str},null,url);
  }
  return url;
};

export const changeRoute=(opts)=>{
  const browserRouter=opts.browserRouter;
  let routers=opts.routers||[];
  isUp>2&&(routers=[]);

  const router=$clone(routers);
  const newRouter=restRouter(router,browserRouter);

  const url=redirect(newRouter,browserRouter);

  return getRouter(newRouter,url);
};




































