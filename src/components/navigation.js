import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <h4>Kara Vorwald Photography Archive</h4>
            <Link to="/galleries">galleries</Link>
            <Link to="/">dashboard</Link>
            <Link to="/upload">upload</Link>
        </nav>
    )
}

export default Navigation;