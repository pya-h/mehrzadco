import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.svg";
import DataList from "../gadgets/DataList";
import SlideShow from "../gadgets/SlideShow";
import GetContext from "../../context/GetContext";
import ApiService from "../../services/api";
import { HttpStatusCode } from "axios";
import Toaster from "../gadgets/toast";
import { logException } from "../gadgets/logger";

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
    const [slideShowImages, setSlideShowImages] = useState([]);
    const { Screen, ServicesData, BriefIntro } = GetContext();

    function toggleModalBriefServices() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        (async () => {
            try {
                const responseData = await ApiService.get("/api/gallery/");
                const { data, status } = responseData;
                if (+status === HttpStatusCode.Ok) setSlideShowImages(data);
            } catch (ex) {
                Toaster.error(
                    "دریافت تصاویر اسلاید شو با خطا مواجه شد. لطفا صفحه رو لحظاتی بعد دوباره ریلود کنید."
                );
                logException(ex);
            }
        })();
    }, []);
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
                {Screen.large && Boolean(slideShowImages?.length) && (
                    <SlideShow startIndex={slideShowImages.length - 1} outerClass="position-fixed">
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

                    <div className="my-5">
                        {!Screen.large && Boolean(slideShowImages?.length) && (
                            <SlideShow
                                className="img-fluid main-img-mobile d-block"
                                startIndex={slideShowImages.length - 1}
                                style={{
                                    borderRadius: "15px",
                                    height: "60vh",
                                    width: !Screen.small ? "60vh" : "49vh",
                                }}
                            >
                                {slideShowImages}
                            </SlideShow>
                        )}
                        <div
                            style={
                                !Screen.medium
                                    ? {
                                          position: "absolute",
                                          bottom: "10vh",
                                          ...(Screen.small
                                              ? { right: "30%" }
                                              : {}),
                                      }
                                    : {
                                          position: "absolute",
                                          bottom: "5vh",
                                          right: "40%",
                                      }
                            }
                        >
                            <button
                                className="button btn-more mx-auto"
                                onClick={toggleModalBriefServices}
                            >
                                <span className="button-text mx-auto">
                                    بیشتر ...
                                </span>
                                <span className="button-icon fa fa-arrow-right"></span>
                            </button>
                        </div>
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
