import * as React from 'react';

import './preview.less';

export default class Header extends React.Component {
  state={
    stHead:false,
  };
  componentDidMount(){
    window.addEventListener('scroll',this.$scroll,false);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.$scroll,false);
  }

  $scroll=()=>{
    let sth=false;
    let stm=false;
    let st=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
    if(st>25){  //52
      stm=true;
    }
    if(st>748){
      sth=true;
    }
    this.setState({
      stMenu:stm,
      stHead:sth,
    });
  };

  render() {
    const {stHead,stMenu}=this.state;
    const st=stHead?' st-head':'';
    const stm=stMenu?' st-menu':'';
    const h=stMenu?' y-hide':'';
    return(
      <div className="head-area">
        <div className={`header${st}`}>
          <div className="logo">
            <a href="javascript:;">Phoenix UI</a>
          </div>
          {
            !stMenu&&
            <div className="header-right">
              <ul>
                <li><a href="javascript:;">登录</a></li>
                <li><a href="javascript:;">注册</a></li>
              </ul>
            </div>
          }
        </div>
        <div className="content">
          <ul className={`menu${stm}`}>
            <li><a href="javascript:;">主页</a></li>
            <li><a href="javascript:;">产品</a></li>
            <li><a href="javascript:;">服务</a></li>
            <li><a href="javascript:;">关于我们</a></li>
            <li><a href="javascript:;">联系我们</a></li>
            <li><a href="javascript:;">博客</a></li>
            <li><a href="javascript:;">技术团队</a></li>
            <li><a href="javascript:;">经营理念</a></li>
          </ul>
        </div>
        <div className="bg-img">
          <img src={require('./1.jpg')} alt="背景图片" />
        </div>
      </div>
    );
  }
}