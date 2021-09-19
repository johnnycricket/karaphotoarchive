import './App.scss';
import React, { useEffect, useState } from 'react';
import Amplify, { Auth, Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import Dashboard from './pages/Dashboard';
import Navigation from './components/navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Gallery from './pages/Gallery';
import Galleries from './pages/Galleries';
import Upload from './pages/Upload';

Amplify.configure(awsconfig);

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      try{
        const user = await Auth.currentAuthenticatedUser();
        setIsAdmin(user.signInUserSession.accessToken.payload['cognito:groups'].includes('admin'))
        setUser(user);
      } catch(e) {
        console.log(e)
      } 
    }
  })

  Storage.list('')
    .then(result => console.log(result))
    .catch(err => console.log(err))

  const handleLogout = async() => {
    await Auth.signOut();
  }
  
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/">
            {!user.attributes && <Link to='/sign-in'></Link>}
            {user.attributes && <button onClick={handleLogout()}></button>}
            <Dashboard />
          </Route>
          <Route path="/galleries/:year/:galleryId" component={Gallery}/>
          <Route path="/galleries" component={Galleries}/>
          <Route path="/upload" component={Upload}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
