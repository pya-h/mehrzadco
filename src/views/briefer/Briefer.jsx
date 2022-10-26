import React, { useState } from "react";
import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.svg";
import OurServices from "./OurServicesInBrief";
import "./briefer.css";
import SlideShow from "../slideshow";
import { useMediaQuery } from "react-responsive";
const Briefer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modeSmall = useMediaQuery({ query: "(max-width: 650px)" });
    const modeMedium =
        useMediaQuery({ query: "(max-width: 1500px)" }) && !modeSmall;
    const modeLarge = useMediaQuery({ query: "(min-width: 1500px)" });

    const slideShowImages = [
        require("../../assets/img/portfolio/mehrzad/img_mehrzad_0.jpg"),
        require("../../assets/img/portfolio/mehrzad/img_mehrzad_1.jpg"),
        require("../../assets/img/portfolio/mehrzad/img_mehrzad_2.jpg"),
    ];

    const brieferContent = {
        title: "شرکت مهندسی و ساخت مهرزاد",
        descriptions: `شرکت مهندسی و ساخت مهرزاد از متخصصین رشته های مختلف ساختمانی تشکیل شده است از مهم ترین افراد این تیم حرفه ای می توان به مهندسان معماری، عمران، برق، مکانیک، نقشه بردار و درنهایت مهندس کنترل پروژه اشاره کرد.
        در این مقاله بخش های مختلف شرکت مهندسی و ساخت مهرزاد را بررسی میکنیم همچنین درباره هر کدام از بخش های این دفتر توضیح مختصری خواهیم داد.`,
        button: "بیشتر ...",
    };

    function toggleModalBriefServices() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div
                className="row home-details-container align-items-center"
            >
                {modeLarge && (
                    <SlideShow startIndex={2} outerClass="position-fixed">
                        {slideShowImages}
                    </SlideShow>
                )}
                <div
                    className={`${
                        modeLarge ? "col-8 offset-lg-4" : ""
                    } home-details text-center text-lg-start`}
                >
                    <h1
                        className="col-12 text-center"
                        style={{
                            marginTop: modeMedium
                                ? "5rem"
                                : modeSmall
                                ? "1rem"
                                : "0",
                            fontSize: modeSmall
                                ? "36px"
                                : modeMedium
                                ? "44px"
                                : "55px",
                        }}
                    >
                        {brieferContent.title}
                    </h1>
                    <div className="my-5">
                        {!modeLarge && (
                            // <img
                            //     style={{ opacity, borderRadius: "15px", height: !modeSmall ? "60vh" : "50vh", width: !modeSmall ? "60vh" : "50vh" }}
                            //     src={slideShowImages[imageIndex]}
                            //     className="img-fluid main-img-mobile d-block fade-out-in"
                            //     alt="slideshow"
                            // />
                            <SlideShow
                                className="img-fluid main-img-mobile d-block"
                                startIndex={2}
                                style={{
                                    borderRadius: "15px",
                                    height: !modeSmall ? "60vh" : "50vh",
                                    width: !modeSmall ? "60vh" : "49vh",
                                }}
                            >
                                {slideShowImages}
                            </SlideShow>
                        )}
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            {brieferContent.descriptions}
                        </p>
                        <button
                            className="button"
                            onClick={toggleModalBriefServices}
                        >
                            <span className="button-text">
                                {brieferContent.button}
                            </span>
                            <span className="button-icon fa fa-arrow-right"></span>
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalBriefServices}
                contentLabel="تخصص ها"
                className="custom-modal dark hero"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
            >
                <div>
                    <button
                        className="close-modal"
                        onClick={toggleModalBriefServices}
                    >
                        <img src={cancelImg} alt="close icon" />
                    </button>

                    <div className="box_inner about p-5">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                                    تخصص ها
                                </h3>
                            </div>
                            <div className="text-center m-15 px-tb">
                                <div className="resume-box">
                                    <OurServices />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Briefer;
