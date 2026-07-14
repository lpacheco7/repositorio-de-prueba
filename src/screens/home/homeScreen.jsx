import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./homeScreen.css";

function HomeScreen() {
    const navigate = useNavigate();
    return (
        <div className="homeContainer">
            <h1 className="homeLogo">Google</h1>
            <div className="homeSearchBox">
                <h2 className="homeSearchText">¿Qué es el amor?</h2>
                <button className="homeSearchButton" onClick={() => navigate("/all")}>
                    <FaSearch />
                </button>
            </div>
        </div>
    );
}

export default HomeScreen;