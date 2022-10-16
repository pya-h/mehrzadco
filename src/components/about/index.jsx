import React from "react";
import Achievements from "./Achievements";
import PersonalInfo from "./PersonalInfo";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import RoadMap from "../roadmap";
import educations from "./educationsData";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  مشخصات پرسنل
                </h3>
              </div>

              <div className="col-12 d-block d-sm-none">
                <img
                  src={heroImgMobile}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>

              <div className="col-12">
                <PersonalInfo />
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
        </div>

        <hr className="separator" />
        <div className="row">

          <RoadMap title="خدمات">{educations.javadMehrzad}</RoadMap>
        </div>
      </div>
    </section>
  );
};

export default index;
