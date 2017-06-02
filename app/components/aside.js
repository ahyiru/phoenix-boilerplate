import * as React from 'react';
import PropTypes from 'prop-types';

import {SideBar,RightBar,Tabs,Tabpage,List} from 'yrui';

import {rightbarTabs,rightbarTabLists} from '../models/models';

export default class Aside extends React.Component {

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
                );
              })
            }
          </Tabs>
        </RightBar>
      </aside>
    );
  }
}

Aside.PropTypes={
  sideBarMenu:PropTypes.array,
};
Aside.defaultProps={
  sideBarMenu:[],
};