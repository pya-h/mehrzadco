import React from "react";

const achievementsContent = [
  { title: "13", subTitle1: "سابقه", subTitle2: "(سال)" },
  { title: "200", subTitle1: "پروژه های", subTitle2: "پایان یافته" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="position-relative">{val.title}</h3>
            <h1 className="m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
