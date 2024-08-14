import React, { useEffect, useState } from "react";
import ImplementationProcess from "./ImplementationProcess";
import RoadMap from "../roadmap";
import GetContext from "../../context/GetContext";
import VideoPlayer from "../gadgets/VideoPlayer";
import DataList from "../gadgets/DataList";
import CoolTitle from "../gadgets/CoolTitle";
import ApiService from "../../services/api";
import Toaster from "../gadgets/toast";
import { HttpStatusCode } from "axios";

const OurServices = () => {
    const { ServicesData, whyus, isDark } = GetContext();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        ApiService.get("/api/portfolio/videos")
            .then((responseData) => {
                const { data, status } = responseData;
                console.warn(responseData)
                if (+status === HttpStatusCode.Ok) setVideos(data);
                else throw new Error("Get Failure");
            })
            .catch((err) => {
                Toaster.error(
                    "متاسفانه دریافت ویدیو ها با خطا مواجه شد. لطفا لحظاتی دیگر، پس از بررسی اتصال اینترنت خود، دوباره تلاش کنید ..."
                );
            });
    }, []);
    return (
        <section
            className="main-content"
            data-aos="fade-up"
            data-aos-duration="1200"
        >
            <CoolTitle front="خدمات ما" behind="Services" />
            <div className="container">
                <div className="row">
                    <RoadMap title="خدمات">
                        {ServicesData?.generalServices}
                    </RoadMap>
                </div>

                <hr className="separator" />
                <h2 className="title text-warning text-center mb-4">
                    چرا گروه مهندسی و ساخت مهرزاد؟
                </h2>
                <div className="row my-5 mx-auto">
                    <div className="col-md-6">
                        <DataList
                            textSize="small"
                            lineBreaks={true}
                            icon={{
                                inline: true,
                                drawColor: isDark ? "light" : "dark",
                            }}
                        >
                            {whyus}
                        </DataList>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12 my-1">
                        <VideoPlayer>{videos}</VideoPlayer>
                    </div>
                </div>
                <hr className="separator" />

                <div className="row">
                    <h2 className="title text-warning text-center mb-5">
                        روند انجام پروژه ها
                    </h2>
                    <ImplementationProcess>
                        {ServicesData?.implementationProcess}
                    </ImplementationProcess>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
