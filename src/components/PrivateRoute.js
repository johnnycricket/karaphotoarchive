import { Route, Redirect } from "react-router";
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}, admin) => {
    const { state } = useLocation();

    console.log(admin);
    return (
        <Route {...rest} render={({ location }) => {
            return admin === true ? children : <Redirect to={{
                pathname: '/sign-in',
                state: { from: location }
            }} />
        }} />
    )
};

export default PrivateRoute;