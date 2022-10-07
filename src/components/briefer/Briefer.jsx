import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/portfolio/mehrzad/img_mehrzad_2.jpg";
import heroImgMobile from "../../assets/img/portfolio/mehrzad/img_mehrzad_2.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../about/index";

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
            backgroundImage: `url(${
              brieferContent.image
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
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
      {/* End home-details-container */}

      {/* Start Modal for About More */}
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
          {/* End close icon */}  

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  درباره <span>ما</span>
                </h1>
                <span className="title-bg">About Us</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Briefer;
