import React, { useState } from "react";
import PropTypes from "prop-types";
import RoadMapItem from "./RoadMapItem";

RoadMap.propTypes = {
    data: PropTypes.array,
};

function RoadMap(props) {
    const { data } = props;

    const [dataBlock] = useState({
        subtitle: "ROADMAP",
        title: "cybox Timeline",
    });

    return (
        <section className="tf-section tf-roadmap">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="tf-title mb-30"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title">{dataBlock.title}</h4>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="roadmap scrol">
                            {data.map((item) => (
                                <RoadMapItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RoadMap;
