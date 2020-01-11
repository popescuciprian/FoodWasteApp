import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Onboarding from './Onboarding';



ReactDOM.render(<Onboarding />, document.getElementById('root'));
serviceWorker.unregister();