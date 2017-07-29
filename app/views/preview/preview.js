import * as React from 'react';

import './preview.less';

import Header from './header';
import Footer from './footer';

import F1 from './f1';
import F2 from './f2';
import F3 from './f3';
import F4 from './f4';
import F5 from './f5';

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
    });
  };

  render() {
    const {hcls}=this.state;
    const ico=hcls?'commenting':'close';
    return(
      <div className="preview">
        <Header />
        <Footer />
        <F1 />
        <F2 />
        <F3 />
        <F4 />
        <F5 />
        
        <div className={`bottom-noty${hcls}`}>
          <i className={`fa fa-${ico}`} onClick={this.close} />
        </div>
      </div>
    );
  }
}