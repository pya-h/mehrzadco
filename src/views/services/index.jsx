import React from "react";
import Achievements from "./Achievements";
import RoadMap from "../roadmap";
import GetContext from "../../context/GetContext";

const OurServices = () => {
    const { ServicesData } = GetContext();

    return (
        <section className="main-content ">
            <div className="container">
                <div className="row">
                    <Achievements />
                </div>

                <hr className="separator" />
                <div className="row">
                    <RoadMap title="خدمات">
                        {ServicesData?.generalServices}
                    </RoadMap>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
