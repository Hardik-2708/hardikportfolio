import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.scss'
import './index.css';
 

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Type assertion here
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
