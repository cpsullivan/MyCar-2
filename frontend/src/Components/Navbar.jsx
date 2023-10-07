import { Link } from "react-router-dom"

export default function Navbar() {
    return (
    <>
        <ul className="navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
            <li>
                <Link to="/Signup">Signup</Link>
            </li>
            <li>
                <Link to="/Logout">Logout</Link>
            </li> 
            <li>
                <Link to="/MyCarPage">MyCarPage</Link>
            </li>
        </ul>
    </>
    );
}
