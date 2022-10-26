import React from "react";
import StaffInfo from "./StaffInfo";

const AboutUs = () => {
    return (
        <section className="main-content ">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-12">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                                    مشخصات پرسنل
                                </h3>
                            </div>

                            <div className="col-12">
                                <StaffInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
