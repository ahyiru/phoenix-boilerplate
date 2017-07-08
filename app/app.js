import * as React from 'react';
import { render } from 'react-dom';

import {Router} from 'yrui';

import Frame from './frame';
// import {sidebarMenu} from './models/routers';
import {dispatchMenu,subscribeMenu,getMenu} from './models/updateMenu';

import 'font-awesome/css/font-awesome.css';
import 'yrui/lib/yrui.css';

import 'styles/reset.less';

export default class App extends React.Component {
  state={
    menu:getMenu(),
  };
  componentDidMount(){
  	const {menu}=this.state;
    subscribeMenu((v)=>{
    	console.log(v);
      this.setState({
        menu:v,
      });
    });
    setTimeout(()=>{
      const menu=this.state.menu.slice(0,2);
			dispatchMenu(menu);
		},2000);
  }
  componentWillUnmount(){
    unSubscribeMenu();
  }
  render(){
    const {menu}=this.state;
    return (
      <Router routers={menu} browserRouter={false} frame={Frame} />
    );
  }
}