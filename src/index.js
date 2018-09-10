import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storage from './Stor'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App storage={storage} />, document.getElementById('root'));
registerServiceWorker();
