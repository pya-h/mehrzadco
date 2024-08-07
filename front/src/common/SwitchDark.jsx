import React from "react";
import lightImage from "../assets/img/sun.png";
import GetContext from "../context/GetContext";
import { change } from "./tools";

const SwitchDark = () => {
    const {isDark, setIsDark} = GetContext();
    const handleLabelClick = () => {
        if (isDark) {
            change.theme("light");
            setIsDark(false);
        } else {
            change.theme("dark");
            setIsDark(true);
        }
    };

    return (
        <label
            className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}
        >
            <input
                type="checkbox"
                onClick={handleLabelClick}
                className="theme-switcher"
            />
            <div className="switch-handle">
                <span className="light-text">
                    <img src={lightImage} alt="swicher" className="filter_1" />
                </span>
                <span className="dark-text">
                    <i className="fa fa-moon-o" aria-hidden="true"></i>
                </span>
            </div>
        </label>
    );
};

export default SwitchDark;
