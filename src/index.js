import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';

import './index.css';

// const elem = React.createElement('h2', {className: 'greeting'}, 'Hello, World!'); /* (пример создания элемента без jsx) */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

