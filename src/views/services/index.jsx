import React from "react";
import Achievements from "./Achievements";
import RoadMap from "../roadmap";
import { generalServices } from "../../rawdata/services";

const OurServices = () => {
    return (
        <section className="main-content ">
            <div className="container">
                <div className="row">
                    <Achievements />
                </div>

                <hr className="separator" />
                <div className="row">
                    <RoadMap title="خدمات">{generalServices}</RoadMap>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
