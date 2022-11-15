import React from "react";
import GetContext from "../../context/GetContext";

const StaffInfo = ({ children }) => {
    const { Screen } = GetContext();

    return (
        children instanceof Array &&
        children.map((field, idx) => (
            <p className="mt-lg-5 mt-md-4 mt-3 mx-1" style={{ fontSize: Screen.superSmall ? "14px" : "25px" }}>
                {/* {Boolean(!Screen.superSmall) && <span>{field.label}: </span>} */}
                <span
                    dir="ltr"
                    className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                >
                    {field.value}
                </span>
                {Boolean(idx % 2 === 0) && <hr className="mx-4 text-primary" />}
            </p>
        ))
    );
};

export default StaffInfo;
