import * as React from 'react';

require('es6-promise').polyfill();
var fetch=require('isomorphic-fetch');

import {$storage} from '../../tools/yiru-tools';

const getParms=()=>{
  const href=location.href;
  const parms=href.split('?')[1].split('&');
  let obj={};
  parms.map((v,k)=>{
    let key=v.split('=')[0];
    let val=v.split('=')[1];
    obj[key]=val;
  });
  console.log(obj);
  return obj;
};

export default class WeixinAuth extends React.Component<any,any> {
  constructor(props){
    super(props);
  };

  componentDidMount(){
    // var h=document.body.offsetHeight;
    var h=window.innerHeight;
    var weixin:any=document.getElementsByClassName('weixin')[0];
    weixin.style.height=h+'px';
  };
  render() {
    return(
      <div className="weixin">
        <h2>扫码登录!</h2>
        <div className="weixin-auth">
          <img src={require('./qrcode.png')} />
        </div>
      </div>
    )
  }
}