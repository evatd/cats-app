import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import catimages from './image_data';



ReactDOM.render(<App images={catimages} />, document.getElementById('root'));

registerServiceWorker();
