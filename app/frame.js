import * as React from 'react';

import Header from './components/head';
import Aside from './components/aside';
import {PageHeader,Main,Notify} from 'yrui';

export interface FrameProps {
  current?:any;
  menu?:any;
};

export default class Frame extends React.Component<FrameProps,any> {
  static propTypes={
    current:React.PropTypes.array,
    menu:React.PropTypes.array,
  };
  static defaultProps={
    current:[],
    menu:[],
  };
  render() {
    const {current,menu}=this.props;
    return (
      <div className="@frame">
        <Header />
        <Aside sideBarMenu={menu}/>

        <Main breadcrumb={current} hidePageHead={true}>
          {this.props.children}
        </Main>

      </div>
    );
  }
}
