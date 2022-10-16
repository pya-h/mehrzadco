import React from "react";
import DarkLogo from "../assets/logo/dark.png";
import LightLogo from "../assets/logo/light.png";
import GetContext from "../context/GetContext";

const Logo = () => {
    const {isDark} = GetContext();

    return (
        <div className={`logo-label ${isDark ? "active" : ""}`}>
            <img
                src={isDark ? DarkLogo : LightLogo}
                className="img-fluid"
                alt="hero man"
            />
        </div>
    );
};

export default Logo;