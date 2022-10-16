import React from "react";

const personalInfoContent = [
  { meta: "نام", metaInfo: "جواد مهرزاد" },
  { meta: "نام", metaInfo: "فرید مهرزاد" },
  { meta: "متولد", metaInfo: "1365" },
  { meta: "متولد", metaInfo: "1368" },
  { meta: "شماره تماس", metaInfo: "+9113384825" },
  { meta: "شماره تماس", metaInfo: "+9112858020" },
  { meta: "ایمیل", metaInfo: "javad@mehrzad" },
  { meta: "ایمیل", metaInfo: "farid@mehrzad" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span dir="ltr" className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
