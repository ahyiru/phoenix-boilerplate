import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Router,tools} from 'yrui';
import 'font-awesome/css/font-awesome.css';
import 'yrui/lib/yrui.css';
import './styles/configs.less';

import Footer from './views/footer';
import Rightbar from './views/rightbar';
import {Profile,Theme} from './views/droplist';
import {app} from './models/init';

app.rightbar=<Rightbar />;
app.footer=<Footer />;

app.navbar.leftNav[0].drop=<Theme/>;
app.navbar.rightNav[2].drop=<Profile/>;

// const {$fetch,observer}=tools;

ReactDOM.render(<Router {...app} />, document.getElementById('phoenix'));



