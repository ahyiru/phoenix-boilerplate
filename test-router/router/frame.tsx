import * as React from 'react';
import {str2Dom} from '../tools/dom-tools';

import Brand from '../components/header/brand';
import Nav from '../components/header/nav';
import SideBar from '../components/aside/sidebar';
import PageHeader from '../components/base/pageheader';

const hasMenu=(current)=>{
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
  return {
    noFrame,
    noMenu,
  };
};

export interface FrameProps {
  current?:any;
  title?:string;
  subtitle?:string;
  homeUrl?:string;
}

export const Frame=(props)=>{
  const {current,AsyncComponent,homeUri,brand,showSubMenuData,rightbar,sidebar,footer,main}=props;
  if(current.length){
    const {noFrame,noMenu}=hasMenu(current);
    if(noFrame){
      return (
        <div className="noframe-page">
          <AsyncComponent />
        </div>
      );
    }else{
      const nom=noMenu?' nomenu':'';
      return (
        <div className="@frame">
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
                  typeof rightbar==='string'?str2Dom(rightbar):rightbar
                }
              </section>}
            </aside>
          }
          <main>
            <section className={`y-main${nom}`}>
              {footer&&<div className="y-footer">
                {
                  typeof footer==='string'?str2Dom(footer):footer
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
        </div>
      );
    }
  }
  return '空页面!!!';
};