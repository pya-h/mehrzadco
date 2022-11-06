import React from "react";

const socialLinks = [
    {
        iconName: "fa fa-instagram",
        link: "https://www.instagram.com/mehrzad_constrction_group",
    },
    { iconName: "fa fa-whatsapp", link: "https://whatsapp.com/" },
    {
        iconName: "fa fa-youtube",
        link: "https://www.youtube.com/",
    },
    { iconName: "fa fa-telegram", link: "https://telegram.com/" },
];

const SocialLinks = () => {
    return (
        <div
            className="contact"
            style={{ position: "fixed", bottom: "5%", right: "50%" }}
        >
            <ul className="social list-unstyled pt-1 mb-5">
                {socialLinks.map((val, i) => (
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
