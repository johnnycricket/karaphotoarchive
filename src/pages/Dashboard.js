import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard = (
    user
) => {
    return (
        <div>
            <section>
                Kara Vorwald Photography Archive App
            </section>
            <section>
                {user.attributes && <span>{user.attributes.email}</span>}
                {!user.attributes && <Link to='/sign-in'>Sign In</Link>}
            </section>
        </div>
    )   
}

export default Dashboard