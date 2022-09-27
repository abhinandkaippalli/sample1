import { Link } from "react-router-dom";
import './layout.css';

const Layout = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/Leaderboard" className="link">Leaderboard</Link>
                </li>
                <li>
                    <Link to="/Form1" className="link">Signup</Link>
                </li>
            </ul>
        </div>
    )
}

export default Layout