import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify, { Storage, AuthModeStrategyType } from '@aws-amplify/core';
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
