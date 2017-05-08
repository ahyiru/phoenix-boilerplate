import * as React from 'react';

import {SideBar,RightBar,Tabs,Tabpage,List} from 'yrui';

import {rightbarTabs,rightbarTabLists} from '../models/models';

export interface AsideProps {
  sideBarMenu?:any;
};

export default class Aside extends React.Component<AsideProps,any> {
  state={auth:'yiru'};

  static defaultProps={
    sideBarMenu:[],
  };
  render() {
    // let user=getUser();
    // user&&(user.logo=require('../../styles/images/usr.jpg'));
    return (
      <aside>
        <SideBar menu={this.props.sideBarMenu} hideSidebarTitle /*userInfo={user}*/ />
        <RightBar>
          <Tabs>
            {
              rightbarTabs.map((v,k)=>{
                return (
                  <Tabpage key={`tabs-${k}`} icon={v.icon}>
                    <List list={rightbarTabLists} name={v.name} />
                  </Tabpage>
                )
              })
            }
          </Tabs>
        </RightBar>
      </aside>
    );
  }
}
