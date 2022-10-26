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
                        item.details?.map((li,idx) => (
                            <p key={idx} className="px-5 pt-0 text-light">&nbsp;&nbsp;&nbsp;&nbsp; {li.text}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default RoadMapItem;