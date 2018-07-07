import * as React from 'react';
import './style.less';

export default class HelloWorld extends React.Component{
	state={
		msg:'Phoenix UI React 版',
	}
  render(){
    return(
    	<div id="app">
		    <img src="../assets/react.svg" />
		    <div className="hello">
			    <h1>{this.state.msg}</h1>
			  </div>
		  </div>
    );
  }
}