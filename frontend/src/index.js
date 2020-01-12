import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Onboarding from './Onboarding';
import FWApp from './FWApp';

// ReactDOM.render(<Onboarding />, document.getElementById('root'));
ReactDOM.render(<FWApp username="Jackson"/>, document.getElementById('root'));
serviceWorker.unregister();
