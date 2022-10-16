import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/portfolio/mehrzad/img_mehrzad_2.jpg";
import heroImgMobile from "../../assets/img/portfolio/mehrzad/img_mehrzad_2.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import OurServices from "./OurServices";

const brieferContent = {
  image: heroImg,
  mobileImage: heroImgMobile,
  title: "شرکت مهندسی و ساخت مهرزاد",
  descriptions: `شرکت مهندسی و ساخت مهرزاد در سال 1388 توسط مهندس جواد مهرزاد و مهندس فرید مهرزاد تاسیس شد.`,
  button: "معرفی خدمات",
};

const Briefer = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${brieferContent.image
              })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
          <div>
            <img
              src={brieferContent.mobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-center">
              {brieferContent.title}
            </h1>
            <p>{brieferContent.descriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{brieferContent.button}</span>
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