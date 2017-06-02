import * as React from 'react';
import PropTypes from 'prop-types';

import Header from './components/head';
import Aside from './components/aside';
import {Main} from 'yrui';

export default class Frame extends React.Component {

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

Frame.PropTypes={
  current:PropTypes.array,
  menu:PropTypes.array,
};
Frame.defaultProps={
  current:[],
  menu:[],
};