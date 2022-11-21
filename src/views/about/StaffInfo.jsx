import React from "react";


class InfoField extends React.Component {
    render() {

        return (
            <p
                className="mt-lg-4 mt-md-2 mt-1 mx-1"
                style={{ color: "black", fontSize: this.props?.small ? "12px" : "18px" }}
            >
                <span
                    dir="ltr"
                    className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                >
                    {this.props?.children}
                </span>
            </p>
        );
    }
}

const StaffInfo = ({ children }) => {
    return (
        <div>
            <InfoField >{children?.fullname}</InfoField>
            <hr className="mx-4 text-primary" />
            <InfoField >{children?.major}</InfoField>
            <InfoField >{children?.profession}</InfoField>

        </div>
    );
};

export default StaffInfo;