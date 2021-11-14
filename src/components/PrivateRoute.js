import { Route, Redirect } from "react-router";
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const { state } = useLocation();
    console.log('prot route')
    console.log(rest.admin);
    return (
        <Route {...rest} render={({ location }) => {
            return rest.admin === true ? children : <Redirect to={{
                pathname: '/sign-in',
                state: { from: location }
            }} />
        }} />
    )
};

export default PrivateRoute;