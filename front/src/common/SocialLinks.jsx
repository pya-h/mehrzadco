import React from "react";
import GetContext from "../context/GetContext";

const SocialLinks = () => {
    const { Socials } = GetContext();
    return (
        <div
            className="contact"
            style={{ position: "fixed", bottom: "5%", right: "50%" }}
        >
            <ul className="social list-unstyled pt-1 mb-5">
                {Socials.map((val, i) => (
                    <li key={i}>
                        <a href={val.link} target="_blank" rel="noreferrer">
                            <i className={val.iconName}></i>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
