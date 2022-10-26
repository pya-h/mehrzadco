import React from "react";
import { fieldExpertise } from "../../rawdata/services";

const OurServicesInBrief = () => {
    return (
        <ul dir="rtl">
            {fieldExpertise.map((item, i) => (
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
