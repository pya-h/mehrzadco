import React from "react";

const achievementsContent = [
    { value: "13", subTitle1: "سابقه (سال)", subTitle2: null },
    { value: "200", subTitle1: "پروژه های پایان یافته", subTitle2: null },
];

const Achievements = () => {
    return (
        <div className="row">
            {achievementsContent.map((val, i) => (
                <div className="col-6" key={i}>
                    <div className="box-stats with-margin">
                        <h1 className="m-0 text-uppercase text-center">
                            {val.subTitle1}
                            {val.subTitle2 && (
                                <span className="d-block">{val.subTitle2}</span>
                            )}
                        </h1>
                        <br />
                        <h3 className="w-100 text-center"><sup>+</sup>{val.value}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Achievements;
