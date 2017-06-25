import * as React from 'react';

import './preview.less';

import Header from './header';
import Footer from './footer';

export default class Preview extends React.Component {

  componentDidMount(){
  	
  }

  state={
    hcls:' close',
  };

  close=(e)=>{
    e.stopPropagation();
    this.setState({
      hcls:this.state.hcls?'':' close',
    })
  };

  render() {
    const {hcls}=this.state;
    const ico=hcls?'commenting':'close';
    return(
    	<div className="preview">
    		<Header />
        <Footer />
        <div className="f1" />
        <div className="f2" />
        <div className="f3" />
        <div className="f4" />
        <div className="f5" />
        
        <div className={`bottom-noty${hcls}`}>
          <i className={`fa fa-${ico}`} onClick={this.close} />
        </div>
    	</div>
    )
  }
}