import { Link } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/Leaderboard">Leaderboard</Link>
                </li>
                <li>
                    <Link to="/Form1">Signup</Link>
                </li>
            </ul>
        </div>
    )
}

export default Layout