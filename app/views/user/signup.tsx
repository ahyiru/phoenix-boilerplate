import * as React from 'react';

require('es6-promise').polyfill();
var fetch=require('isomorphic-fetch');

import {localData} from '../../configs/tools';

export default class Signup extends React.Component<any,any> {
	static contextTypes={
    router:React.PropTypes.object
  };
	constructor(props){
		super(props);
    this.state=({
      title:'注册',
      mval:'',
      nval:'',
      pval:'',
      rpval:'',
      passwdType:'password',
      rpasswdType:'password'
    })
	};
	componentDidMount=()=>{

	};
	signup=()=>{
		/*var name=document.getElementById('username').value;
    var password=document.getElementById('password').value;*/
    var data={
      name:this.state.nval,
      email:this.state.mval,
      password:this.state.pval,
    };
    var path='/';
    /*let users=JSON.parse(localStorage.getItem('users'));
    if(users){
      var f=true;
      users.map((v,k)=>{
        if(v.name==name&&v.password==password){
          localStorage.setItem('curUser',name);
          this.context.router.push(path);
          f=false;
          return false;
        }
      })
      if(f) alert('用户名或密码错误！');
    }
    else{
      this.context.router.push('info/signup');
      return true;
    }*/
    fetch('http://localhost:18080/auth/signup',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{'Content-Type':'application/json'},
    }).then(response => response.json())
      .then(data => {
        if(data.message){
          console.log(data.message);
        }
        if(data.token){
          console.log(data.token);
          localData.set('token',data.token);
          localData.set('user',data.user);
          // this.context.router.push(path);
          location.pathname=path;
        }
      })
      .catch(e => console.log("登录失败,"+e));
	};

  getEmail=(e)=>{
    this.setState({
      mval:e.target.value
    })
  };
  getName=(e)=>{
    this.setState({
      nval:e.target.value
    })
  };
  getPasswd=(e)=>{
    this.setState({
      pval:e.target.value
    })
  };
  getRpasswd=(e)=>{
    this.setState({
      rpval:e.target.value
    })
  };

  changeType=(v)=>{
  	if(v==='passwdType'){
  		this.setState({
	      passwdType:this.state.passwdType=='password'?'text':'password'
	    });
  	}
    if(v==='rpasswdType'){
  		this.setState({
	      rpasswdType:this.state.rpasswdType=='password'?'text':'password'
	    });
  	}
  };

  resetVal=(v)=>{
  	if(v==='mval'){
  		this.setState({
	      mval:''
	    });
  	}
    if(v==='nval'){
  		this.setState({
	      nval:''
	    });
  	}
  };

  render() {
    const{mval,nval,pval,rpval,passwdType,rpasswdType,title}=this.state;
    return(
    		<form>
          <h4>{title}</h4>
          <div className="log-row">
            <input type="text" placeholder="邮箱" value={mval} onChange={this.getEmail} />
            {mval?<i className="fa fa-times-circle" onClick={this.resetVal.bind(this,'mval')}></i>:''}
          </div>
          <div className="log-row">
            <input type="text" placeholder="昵称" value={nval} onChange={this.getName} />
            {nval?<i className="fa fa-times-circle" onClick={this.resetVal.bind(this,'nval')}></i>:''}
          </div>
          <div className="log-row">
            <input type={passwdType} placeholder="密码" value={pval} onChange={this.getPasswd} />
            {pval?<i className="fa fa-eye" onClick={this.changeType.bind(this,'passwdType')}></i>:''}
          </div>
          <div className="log-row">
            <input type={rpasswdType} placeholder="确认密码" value={rpval} onChange={this.getRpasswd} />
            {rpval?<i className="fa fa-eye" onClick={this.changeType.bind(this,'rpasswdType')}></i>:''}
          </div>
          <div className="log-row">
            <input type="checkbox" className="reg-user1" href="#/user/signup" /><label>同意 <a href="javascript:;">条款和政策</a></label>
          </div>
          <div className="log-row">
    			  <button type="button" className="ybtn ybtn-success ybtn-block" onClick={this.signup}>{title}</button>
          </div>
          <div className="log-row">
          	<label>已有账号？<a href="#/user/login">登录</a></label>
          </div>
    		</form>
    )
  }
}