import React from "react";

const StaffInfo = ({ children }) => {
    return (
        children instanceof Array && children.map(field => <p>
            <span className="title">{field.label}: </span>
            <span
                dir="ltr"
                className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
            >
                {field.value}
            </span>
        </p>)
    );
};

export default StaffInfo;
