import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectReview = ({ children, modalImageIndex = 1 }) => {
    return (
        <div className="modal_portfolio ">
            <div className="modal__content">
                {children && (
                    <div key={children.id} data-aos="fade">
                        <h2 className="heading mb-2">{children.type}</h2>
                        <div className="modal__details">
                            {children.modalDetails.map((details, i) => {
                                return (
                                    <div key={i} className="row">
                                        <div className="col-12 col-sm-6 mb-2">
                                            <i className="fa fa-file-text-o pr-2"></i>
                                            پروژه: &nbsp;
                                            <span className="ft-wt-600 uppercase">
                                                {details.project}
                                            </span>
                                        </div>
                                        <div className="col-12 col-sm-6 mb-2">
                                            <i className="fa fa-user-o pr-2"></i>
                                            آدرس: &nbsp;
                                            <span className="ft-wt-600 uppercase">
                                                {details.address}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <figure className="modal__img">
                            <img
                                src={children.image[modalImageIndex]}
                                alt="portfolio project demo"
                            />
                        </figure>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectReview;
