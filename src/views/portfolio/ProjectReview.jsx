import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";

const ProjectReview = ({ children, imageIndex = 0, onBtnBackClick }) => {
    return (
        <div
            className="container w-100"
            data-aos="fade-up"
            data-aos-duration="1200"
        >
            {children && (
                <div className="mx-auto" key={children.id}>
                    {/* <h1 className="mb-5 text-center">{children.title.fa}</h1> */}
                    <div
                        className="title-section text-center mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <h1 className="text-warning">{children.title?.fa}</h1>
                        <span className="title-bg">{children.title?.en}</span>
                    </div>
                    <div className="row mb-5">
                        <div className="col-2">
                            <button
                                className="back-button-icon fa fa-long-arrow-right hover-opacity-effect"
                                onClick={onBtnBackClick}
                            ></button>
                        </div>
                        <div className="col">
                            {children.details.map((details, i) => {
                                return (
                                    <div key={i} className="row">
                                        <div className="col-12 col-sm-6 mb-2 ">
                                            <i className="fa fa-file-text-o px-2"></i>
                                            &nbsp; پروژه: &nbsp;
                                            <span className="ft-wt-600 uppercase">
                                                {details.project?.fa}
                                            </span>
                                        </div>
                                        <div className="col-12 col-sm-6 mb-2">
                                            <i className="fa fa-user-o px-2"></i>
                                            &nbsp; موقعیت: &nbsp;
                                            <span className="ft-wt-600 uppercase">
                                                {details.address}
                                            </span>
                                        </div>
                                        <div className="col-12 col-sm-6 mb-2">
                                            <i className="fa fa-user-o px-2"></i>
                                            <span>
                                                &nbsp; سال بهره برداری: &nbsp;
                                            </span>
                                            <span  style={{fontSize: "24px"}} className="ft-wt-600 uppercase">
                                                <CountUp
                                                    end={details.endDate}
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
                                                        end={
                                                            details.meterage
                                                                ?.value
                                                        }
                                                        duration={2}
                                                        // separator=" "
                                                        decimals={0}
                                                        decimal=","
                                                        // suffix=
                                                        onEnd={() => null}
                                                    />
                                                </span>
                                                <span className="col">
                                                    &nbsp; &nbsp; &nbsp;
                                                    {details.meterage?.unit?.fa}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="row">
                        <figure style={{ borderRadius: "15px" }}>
                            <a href={children.image[imageIndex]} download>
                                <img
                                    width="100%"
                                    style={{ borderRadius: "15px" }}
                                    height="100%"
                                    src={children.image[imageIndex]}
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
