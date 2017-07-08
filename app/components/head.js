import * as React from 'react';

import {Head,Nav,Brand,tools} from 'yrui';

const $notify=tools.$notify;

import {dropList} from '../models/models';

export default class Header extends React.Component {
  t=0;
  noty=()=>{
    $notify.destroy();
    $notify.start({txt:'联系我：ah.yiru@gmail.com'});
    this.t=setTimeout(function(){
      $notify.destroy();
    },3000);
  };
  handleClick=(v)=>{
    if(v.name==='帮助'){
      clearTimeout(this.t);
      this.noty();
    }
  };
  listClick=(name,v)=>{
    console.log(name+':'+JSON.stringify(v));
    /*if(name=='profile'){
      // localStorage.removeItem('login');  // 删除login缓存
      // localStorage.clear();  // 删除所有缓存
      // rmUser();
      // rmToken();
      // location.href=v.url;
    }*/
  };
  componentWillUnmount(){

  }
  render() {
    return (
      <Head>
        <Brand title="Phoenix" subtitle="UI" logo={require('../styles/images/usr.jpg')} />
        <Nav dropList={dropList} hideRightTogbar={true} login={null} click={this.handleClick} listClick={this.listClick} />
      </Head>
    );
  }
}
