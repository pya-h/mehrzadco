import React from "react";

const StaffInfo = ({children}) => {
    return (
        <ul className="row about-list list-unstyled">
            {children?.map((val, i) => (
                <li key={i}>
                    <span className="title col">{val.label}: </span>
                    <span
                        dir="ltr"
                        className="value col d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                    >
                        {val.value}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default StaffInfo;
