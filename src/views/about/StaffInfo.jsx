import React from "react";

const staffInfoContent = [
  { meta: "نام", metaInfo: "جواد مهرزاد" },
  { meta: "نام", metaInfo: "فرید مهرزاد" },
  { meta: "شماره تماس", metaInfo: "+9113384825" },
  { meta: "شماره تماس", metaInfo: "+9112858020" },
  { meta: "ایمیل", metaInfo: "javad@mehrzad" },
  { meta: "ایمیل", metaInfo: "farid@mehrzad" },
];

const StaffInfo = () => {
  return (
    <ul className="about-list list-unstyled">
      {staffInfoContent.map((val, i) => (
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

export default StaffInfo;
