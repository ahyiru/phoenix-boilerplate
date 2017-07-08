import * as React from 'react';

import './test.less';

export default class Hello extends React.Component {
  timer=0;
  state={
    a:1,
  }
  componentDidMount(){
    console.log(this.timer);
    this.setNum();
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  setNum=()=>{
    this.timer=setInterval(()=>{
      let a=this.state.a+1;
      this.setState({
        a:a,
      });
    },2000);
  };

  render() {
    const {a}=this.state;
    return(
    	<div className="hello">
        <h2>hello world {a}</h2>
    	</div>
    )
  }
}