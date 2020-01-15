import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Onboarding from './Onboarding';
import FWApp from './FWApp';

<<<<<<< HEAD
ReactDOM.render(<Onboarding />, document.getElementById('root'));
// ReactDOM.render(<FWApp username="kakapo"/>, document.getElementById('root'));
=======
// ReactDOM.render(<Onboarding />, document.getElementById('root'));
ReactDOM.render(<FWApp username="Ciprian"/>, document.getElementById('root'));
>>>>>>> 28e00a76ef79adc48835479492cd153f295c7122
serviceWorker.unregister();
