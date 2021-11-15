import './scss/App.scss';
import React, { useEffect, useState } from 'react';
import Amplify, { Auth, Storage } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
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
            try {
                const userToSet = await Auth.currentAuthenticatedUser();
                
                setIsAdmin(userToSet.signInUserSession.accessToken.payload['cognito:groups'].includes('admin'))
                setUser(userToSet);
                console.log('state set');
                console.log(userToSet);
                console.log(isAdmin);
            } catch(e) {
                console.log('error thingy');
                console.log(e);
            }
        }   
        getData(); 
    })

    Storage.list('')
        .then(result => console.log(result))
        .catch(err => console.log(err))

    const handleLogout = async() => {
        await Auth.signOut();
    }
  
    return (
        <div className="App" data-testid="app-container">
            <Router>
                <Navigation user={user}></Navigation>
                <Switch>
                    <Route path="/sign-in">
                        <SignIn />
                    </Route>
                    <PrivateRoute path="/galleries/:year/:galleryId" admin={isAdmin}>
                        <Gallery user={user}></Gallery>
                    </PrivateRoute>
                    <PrivateRoute path="/galleries" admin={isAdmin}>
                        <Galleries user={user}></Galleries>
                    </PrivateRoute>
                    <PrivateRoute path="/upload" admin={isAdmin}>
                        <Upload user={user}></Upload>
                    </PrivateRoute>
                    <Route path="/" exact>
                        {!user.attributes && <Link to='/sign-in'></Link>}
                        {user.attributes && <button onClick={handleLogout()}>Log Out</button>}
                        <Dashboard user={user}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default withAuthenticator(App);
