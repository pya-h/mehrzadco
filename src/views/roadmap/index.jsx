import React from "react";
import PropTypes from "prop-types";
import RoadMapItem from "./RoadMapItem";

RoadMap.propTypes = {
    data: PropTypes.array,
};

function RoadMap({children}) {

    return (
        <section className="tf-section tf-roadmap" >
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
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
