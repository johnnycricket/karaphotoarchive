import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/Roboto/Roboto-Regular.ttf';
import './fonts/Roboto/Roboto-Bold.ttf';
import './fonts/Roboto/Roboto-Black.ttf';
import './index.css';
import App from './App';
import Amplify from '@aws-amplify/core';
import awsconfig from './aws-exports';

Amplify.configure({
  ...awsconfig
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
