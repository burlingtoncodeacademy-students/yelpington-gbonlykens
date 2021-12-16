import { Link } from "react-router-dom";

// Header component
function Header() {
    return(
        <div>
            {/* Link to homepage */}
            <Link to="/" style={{ textDecoration: "none" }}>
                <h1 id="header">
                    Y E L P I N G T O N
                    </h1>
                    <h2>Downtown Miami Restaurants</h2>
            </Link>
        </div>
    );
}

export default Header;