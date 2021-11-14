import { withAuthenticator } from "@aws-amplify/ui-react";
import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <p>Logged in. Head back to: <Link to='/'>Dashboard</Link></p>
        </div>
    )
}

export default withAuthenticator(SignIn);