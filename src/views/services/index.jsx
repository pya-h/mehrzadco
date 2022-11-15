import React from "react";
import Achievements from "./Achievements";
import RoadMap from "../roadmap";
import GetContext from "../../context/GetContext";
import VideoPlayer from "../gadgets/VideoPlayer";
import DataList from "../gadgets/DataList";

const OurServices = () => {
    const { ServicesData, whyus } = GetContext();

    return (
        <section className="main-content ">
            <div className="container">
                <div className="row">
                    <hr className="separator" />
                    <RoadMap title="خدمات">
                        {ServicesData?.generalServices}
                    </RoadMap>
                </div>

                <hr className="separator" />
                <div
                    className="row my-5 mx-auto"
                    // style={{ maxWidth: "50rem", maxHeight: "30rem" }}
                >
                    <div className="col-md-6">
                        <h2 className="title text-warning mb-4">چرا گروه مهندسی و ساخت مهرزاد؟</h2>
                        <DataList textSize="small" icon={{ inline: true }}>
                            {whyus}
                        </DataList>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12 my-1">
                        <VideoPlayer>{ServicesData?.videos}</VideoPlayer>
                    </div>
                </div>
                <hr className="separator" />

                <div className="row">
                    <Achievements />
                </div>
            </div>
        </section>
    );
};

export default OurServices;
