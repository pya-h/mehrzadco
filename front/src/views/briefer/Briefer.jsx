import React, { useState } from "react";
import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.svg";
import DataList from "../gadgets/DataList";
import SlideShow from "../gadgets/SlideShow";
import GetContext from "../../context/GetContext";

const HomeTitle = ({ front, behind }) => (
    <center>
        <div className="home-title-section text-left text-center">
            <p>{front}</p>
            <span className="home-title-bg">{behind}</span>
        </div>
    </center>
);

const Briefer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { Screen, ServicesData, BriefIntro } = GetContext();
    const slideShowImages = [
        require("../../assets/img/portfolio/mehrzad/img_mehrzad_0.jpg"),
        require("../../assets/img/portfolio/mehrzad/img_mehrzad_1.jpg"),
        require("../../assets/img/portfolio/mehrzad/img_mehrzad_2.jpg"),
    ];

    function toggleModalBriefServices() {
        setIsOpen(!isOpen);
    }

    return (
        <div
            className="container-fluid main-container container-home"
            data-aos="fade-up"
            data-aos-duration="1200"
        >
            <div className="color-block d-none d-lg-block"></div>

            <div
                style={Screen.medium ? { height: "90vh" } : {}}
                className="row home-details-container align-items-center"
            >
                {Screen.large && (
                    <SlideShow startIndex={2} outerClass="position-fixed">
                        {slideShowImages}
                    </SlideShow>
                )}
                <div
                    className={`${
                        Screen.large ? "col-8 offset-lg-4" : ""
                    } home-details text-center text-lg-start pt-5`}
                >
                    <HomeTitle
                        front={BriefIntro.title[0]}
                        behind={BriefIntro.title[1]}
                    />
                    <div
                        className="col-12 text-center"
                        style={{
                            marginTop: !Screen.large ? "5rem" : "0",
                            fontSize: Screen.small
                                ? "36px"
                                : Screen.medium
                                ? "44px"
                                : "55px",
                        }}
                    ></div>
                    <div className="my-5">
                        {!Screen.large && (
                            <SlideShow
                                className="img-fluid main-img-mobile d-block"
                                startIndex={2}
                                style={{
                                    borderRadius: "15px",
                                    height: !Screen.small ? "60vh" : "50vh",
                                    width: !Screen.small ? "60vh" : "49vh",
                                }}
                            >
                                {slideShowImages}
                            </SlideShow>
                        )}
                        <div>
                            {BriefIntro.descriptions.map((d) => (
                                <p className="my-0">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {d}
                                </p>
                            ))}
                        </div>
                        <button
                            className="button btn-more my-5"
                            onClick={toggleModalBriefServices}
                        >
                            <span className="button-text">بیشتر ...</span>
                            <span className="button-icon fa fa-arrow-right"></span>
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalBriefServices}
                contentLabel="تخصص ها"
                className={`custom-modal dark hero ${
                    Screen.small
                        ? "w-100 mx-auto px-1"
                        : Screen.medium
                        ? "w-75 mx-auto px-3"
                        : ""
                }`}
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

                    <div className="box_inner about p-lg-5 p-md-3 m-1">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                                    تخصص ها
                                </h3>
                            </div>
                            <div className="text-center mt-1">
                                <div className="resume-box">
                                    <DataList
                                        indenting={true}
                                        icon={{ theme: "warning" }}
                                        listIndicator="-"
                                    >
                                        {ServicesData?.fieldExpertise}
                                    </DataList>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Briefer;
