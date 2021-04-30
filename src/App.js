import './App.css';
import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <div className="App">
      <nav className="app-nav"><AmplifySignOut /></nav>
      <header>
        Kara Photo Storage
      </header>
      <div className="content">
        Hi
      </div>
    </div>
  );
}

export default withAuthenticator(App);
