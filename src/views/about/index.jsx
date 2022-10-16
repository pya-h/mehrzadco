import React from "react";
import Achievements from "./Achievements";
import PersonalInfo from "./PersonalInfo";
import RoadMap from "../roadmap";
import ourServices from "./ourServices";

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

          <RoadMap title="خدمات">{ourServices}</RoadMap>
        </div>
      </div>
    </section>
  );
};

export default index;
