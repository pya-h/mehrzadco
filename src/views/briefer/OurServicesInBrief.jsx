import React from "react";
import GetContext from "../../context/GetContext";

const OurServicesInBrief = () => {
    const { ServicesData } = GetContext();
    return (
        <ul dir="rtl">
            {ServicesData?.fieldExpertise.map((item, i) => (
                <li style={{ textAlign: "right" }} key={i}>
                    <div className="icon">{item.icon}</div>
                    <div>
                        <h3 className="text-uppercase text-warning">
                            {item.title}
                        </h3>

                        {item.details instanceof Array &&
                            item.details.map((x) => (
                                <p className="mx-3">- {x.text}</p>
                            ))}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default OurServicesInBrief;
