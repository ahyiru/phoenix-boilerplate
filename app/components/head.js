import * as React from 'react';

import {Head,Nav,Brand,tools} from 'yrui';

const $notify=tools.$notify;

import {dropList} from '../models/models';

export default class Header extends React.Component {
  noty=()=>{
    $notify.destroy();
    $notify.start({txt:'联系我：ah.yiru@gmail.com'});
    setTimeout(function(){
      $notify.destroy();
    },3000);
  };
  handleClick=(v)=>{
    if(v.name==='帮助'){
      this.noty();
    }
  };
  render() {
    return (
      <Head>
        <Brand title="Phoenix" subtitle="UI" logo={require('../styles/images/usr.jpg')} />
        <Nav dropList={dropList} hideRightTogbar={true} login={null} click={this.handleClick} />
      </Head>
    );
  }
}
