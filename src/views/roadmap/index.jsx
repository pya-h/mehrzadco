import React, { useState } from "react";
import PropTypes from "prop-types";
import RoadMapItem from "./RoadMapItem";
import { useMediaQuery } from "react-responsive";

RoadMap.propTypes = {
    data: PropTypes.array,
};

function RoadMap({children, title, subtitle}) {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const [dataBlock] = useState({
        subtitle,
        title,
    });

    return (
        <section className="tf-section tf-roadmap" style={isPortrait ? {marginBottom: "30rem"} : null}>
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
                            <h4 clasFsName="title">{dataBlock.title}</h4>
                        </div>
                    </div>
                    <div dir="ltr" className="col-md-12">
                        <div className="roadmap scrol">
                            {children.map((item) => (
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
