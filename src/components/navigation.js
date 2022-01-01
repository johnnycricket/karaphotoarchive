import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <div>
                <h1>Kara Vorwald Photography Archive</h1>
            </div>
            <div>
                <Link to="/galleries">galleries</Link>
                <Link to="/">dashboard</Link>
                <Link to="/upload">upload</Link>
            </div>
        </nav>
    )
}

export default Navigation;