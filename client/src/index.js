import React from 'react';
import ReactDOM from 'react-dom';
import './App/index.css';
import App from './App';
import registerServiceWorker from './App/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
