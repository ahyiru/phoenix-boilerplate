import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Router} from 'yrui';
import 'font-awesome/css/font-awesome.css';
import 'yrui/lib/yrui.css';

import {app} from './router';

ReactDOM.render(<Router {...app} />, document.getElementById('phoenix'));



