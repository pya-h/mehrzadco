import React from 'react';
import PropTypes from 'prop-types';

RoadMapItem.propTypes = {
    item: PropTypes.object,
};

function RoadMapItem(props) {
    const {item} = props;
    return (
        <div  dir="rtl" key={item.id} className={`rm-box ${item.positon}`} data-aos="zoom-in" data-aos-duration="1200">
            <div style={{borderRadius: "20px"}} className={`corner-box ${item.style}`}>
                <h3>
                    {item.icon}
                    <span className="mx-2">{item.title}</span>
                </h3>
                <hr />
                <div className="row">
                    {
                        item.details?.map((line,idx) => (
                            <p key={idx} className="px-1 px-lg-5 px-md-4 px-sm-2 pt-0 text-light">{line}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default RoadMapItem;