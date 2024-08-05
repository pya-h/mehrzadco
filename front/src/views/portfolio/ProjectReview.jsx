import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import CoolTitle from "../gadgets/CoolTitle";

const ProjectReview = ({ children, onBtnBackClick }) => {
    console.log(children)
    return (
        <div
            className="container w-100"
            data-aos="fade-up"
            data-aos-duration="1200"
        >
            {children && (
                <div className="mx-auto" key={children.id}>
                    <CoolTitle
                        front={children.name}
                        behind={children.nameEn}
                    />
                    <div className="row mb-5">
                        <div className="col-2">
                            <button
                                className="back-button-icon fa fa-long-arrow-right hover-opacity-effect"
                                onClick={onBtnBackClick}
                            ></button>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-2 ">
                                    <i className="fa fa-file-text-o px-2"></i>
                                    &nbsp; پروژه: &nbsp;
                                    <span className="ft-wt-600 uppercase">
                                        {children.name}
                                    </span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-user-o px-2"></i>
                                    &nbsp; موقعیت: &nbsp;
                                    <span className="ft-wt-600 uppercase">
                                        {children.location}
                                    </span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-user-o px-2"></i>
                                    <span>&nbsp; سال بهره برداری: &nbsp;</span>
                                    <span
                                        style={{ fontSize: "24px" }}
                                        className="ft-wt-600 uppercase"
                                    >
                                        <CountUp
                                            end={new Date(children.finishedAt).getFullYear()}
                                            duration={2}
                                            // separator=" "
                                            decimals={0}
                                            decimal=","
                                            // suffix=
                                            onEnd={() => null}
                                        />
                                    </span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-user-o px-2"></i>
                                    &nbsp; متراژ واحد: &nbsp;
                                    <span className="ft-wt-600 col uppercase">
                                        <span
                                            className="col-lg-1 col-sm-2 col-1"
                                            style={{
                                                fontSize: "24px",
                                                display: "inline-block",
                                            }}
                                        >
                                            <CountUp
                                                end={children.area}
                                                duration={2}
                                                // separator=" "
                                                decimals={0}
                                                decimal=","
                                                // suffix=
                                                onEnd={() => null}
                                            />
                                        </span>
                                        <span className="col">
                                            &nbsp; &nbsp; &nbsp; مترمربع
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <figure style={{ borderRadius: "15px" }}>
                            <a href={children.image} download>
                                <img
                                    width="100%"
                                    style={{ borderRadius: "15px" }}
                                    height="100%"
                                    src={children.image}
                                    alt="portfolio project demo"
                                />
                            </a>
                        </figure>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectReview;
