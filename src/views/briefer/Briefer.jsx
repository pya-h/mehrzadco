import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.svg";
import OurServices from "./OurServices";
import "./briefer.css";

const slideShowImages = [
    require("../../assets/img/portfolio/mehrzad/img_mehrzad_0.jpg"),
    require("../../assets/img/portfolio/mehrzad/img_mehrzad_1.jpg"),
    require("../../assets/img/portfolio/mehrzad/img_mehrzad_2.jpg"),
];
const brieferContent = {
    images: slideShowImages,
    mobileImages: slideShowImages,
    title: "شرکت مهندسی و ساخت مهرزاد",
    descriptions: `شرکت مهندسی و ساخت مهرزاد در سال 1388 توسط مهندس جواد مهرزاد و مهندس فرید مهرزاد تاسیس شد.`,
    button: "معرفی خدمات",
};

const Briefer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const timerID = setInterval(() => {
            setOpacity(0);
            setImageIndex((i) => {
                return (i + 1) % brieferContent.images.length;
            });
        }, [3000]);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    function toggleModalOne() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setTimeout(() => setOpacity(1), 200)
    }, [opacity]);
    return (
        <>
            <div className="row home-details-container align-items-center">
                <div
                    className="col-lg-4 bg position-fixed d-none d-lg-block fade-in-out "
                    style={{
                        backgroundImage: `url(${brieferContent.images[imageIndex]})`,
                    }}
                />
                <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
                    <div>
                        <img
                            style={{ opacity }}
                            src={brieferContent.mobileImages[imageIndex]}
                            className="img-fluid main-img-mobile d-sm-block d-lg-none fade-out-in"
                            alt="slideshow"
                        />
                        <h1 className="text-center">{brieferContent.title}</h1>
                        <p>{brieferContent.descriptions}</p>
                        <button className="button" onClick={toggleModalOne}>
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
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark hero"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
            >
                <div>
                    <button className="close-modal" onClick={toggleModalOne}>
                        <img src={cancelImg} alt="close icon" />
                    </button>

                    <div className="box_inner about p-5">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                                    خدمات ما
                                </h3>
                            </div>
                            <div className="text-center m-15px-tb">
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
