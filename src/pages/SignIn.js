import { withAuthenticator } from "@aws-amplify/ui-react";
import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <h1>Log In</h1>
            <Link to='/'>Dashboard</Link>
        </div>
    )
}

export default withAuthenticator(SignIn);