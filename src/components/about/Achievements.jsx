import React from "react";

const achievementsContent = [
  { title: "13", subTitle1: "سابقه ی", subTitle2: "فعالیت (سال)" },
  { title: "200", subTitle1: "پروژه های", subTitle2: "پایان یافته" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <h1 className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
