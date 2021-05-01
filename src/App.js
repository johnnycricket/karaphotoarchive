import './App.css';
import React from 'react';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import Dashboard from './domains/dashboard';
import Navigation from './components/navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Gallery from './domains/gallery';
import Galleries from './domains/galleries';
import Upload from './domains/upload';

Amplify.configure(awsconfig);

const App = () => {

  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/galleries/:year/:galleryId" component={Gallery}/>
          <Route path="/galleries" component={Galleries}/>
          <Route path="/upload" component={Upload}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
