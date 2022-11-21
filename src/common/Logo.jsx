import React from "react";
import DarkLogo from "../assets/logo/dark.png";
import LightLogo from "../assets/logo/light.png";
import GetContext from "../context/GetContext";

const Logo = () => {
    const { isDark, setTabIndex } = GetContext();

    return (
        <a
            onClick={() => {
                setTabIndex(0);
            }}
            href="/"
            className={`logo-label ${isDark ? "active" : ""}`}
        >
            <img
                src={isDark ? DarkLogo : LightLogo}
                className="img-fluid"
                alt="hero man"
            />
        </a>
    );
};

export default Logo;
