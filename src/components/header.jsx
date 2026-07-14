import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./header.css";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const links = [
        { path: "/all", label: "all" },
        { path: "/images", label: "images" },
        { path: "/maps", label: "maps" },
        { path: "/music", label: "music" },
    ];

    return (
        <div className="headerContainer">

            <div className="headerTop">
                <h1 className="headerLogo" onClick={() => navigate("/")}>Google</h1>
                <div className="headerSearchBox">
                    <h2 className="headerSearchText">¿Qué es el amor?</h2>
                    <button className="headerSearchButton">
                        <FaSearch />
                    </button>
                </div>
            </div>

            <div className="headerBottom">
                {links.map((link) => (
                    <button
                        key={link.path}
                        className={`headerButton ${location.pathname === link.path ? "active" : ""
                            }`}
                        onClick={() => navigate(link.path)}
                    >
                        {link.label}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default Header;