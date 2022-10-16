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
                <h3>{item.title}</h3>
                <div className="row">
                    {
                        item.details?.map((li,idx) => (
                            <p key={idx} className="px-5 pt-3">{li.text}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default RoadMapItem;