import * as React from 'react';

import './user.less';


export default class User extends React.Component<any,any> {

	constructor(props){
    super(props);
  };

  componentDidMount=()=>{
  	// var h=document.body.offsetHeight;
    var h=window.innerHeight;
  	var user:any=document.getElementsByClassName('user')[0];
  	user.style.height=h+'px';
  };

  render() {
    return(
    	<div className="user">
    		<div className="log-panel">
          <div className="log-left">
            <img src={require('./logo.png')} />
          </div>
          <div className="log-right">
            {this.props.children}
          </div>
        </div>
    	</div>
    )
  }
}