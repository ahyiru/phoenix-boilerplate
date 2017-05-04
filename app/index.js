import * as React from 'react';
import { render } from 'react-dom';

import {Router} from 'yrui';

import Frame from './frame';
import {sidebarMenu} from './models/routers';

import 'font-awesome/css/font-awesome.css';
import 'yrui/lib/yrui.css';

import 'styles/reset.less';

render(<Router routers={sidebarMenu} frame={Frame} />, document.getElementById('app'));
