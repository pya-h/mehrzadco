import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectReview = ({ children, imageIndex = 0, onBtnBackClick }) => {
    return (
        <div
            className="container w-100"
            data-aos="fade-up"
            data-aos-duration="1200"
        >
            {children && (
                <div key={children.id}>
                    <h1 className="text-center mb-5">{children.type}</h1>
                    <div className="row mb-5">
                        {children.modalDetails.map((details, i) => {
                            return (
                                <div key={i} className="row text-center">
                                    <div className="col-12 col-sm-6 mb-2 ">
                                        <i className="fa fa-file-text-o pr-2"></i>
                                        &nbsp; پروژه: &nbsp;
                                        <span className="ft-wt-600 uppercase">
                                            {details.project}
                                        </span>
                                    </div>
                                    <div className="col-12 col-sm-6 mb-2">
                                        <i className="fa fa-user-o pr-2"></i>
                                        &nbsp; آدرس: &nbsp;
                                        <span className="ft-wt-600 uppercase">
                                            {details.address}
                                        </span>
                                    </div>
                                    <div className="col-12 col-sm-6 mb-2 mx-auto">
                                        <i className="fa fa-user-o pr-2"></i>
                                        &nbsp; وضعیت: &nbsp;
                                        <span className="ft-wt-600 uppercase">
                                            {details.status}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                        <button className="button-icon fa fa-arrow-right mx-4 hover-opacity-effect" onClick={onBtnBackClick}>
                        </button>
                    </div>
                    <div className="row">
                        <figure style={{ borderRadius: "15px" }}>
                            <img
                                width="100%"
                                style={{ borderRadius: "15px" }}
                                height="100%"
                                src={children.image[imageIndex]}
                                alt="portfolio project demo"
                            />
                        </figure>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectReview;
