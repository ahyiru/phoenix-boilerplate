import * as React from 'react';

import {Head,Nav,Brand} from 'yrui';

import {dropList} from '../models/models';

export default class Header extends React.Component<any,any> {

  render() {
    return (
      <Head>
        <Brand title="Phoenix" subtitle="UI" logo={require('../styles/images/usr.jpg')} />
        <Nav dropList={dropList} hideRightTogbar={true} login={null} />
      </Head>
    );
  }
}
