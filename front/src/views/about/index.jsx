import React from "react";
import GetContext from "../../context/GetContext";
import CoolTitle from "../gadgets/CoolTitle";
import StaffInfo from "./StaffInfo";

const AboutUs = () => {
    const { AboutData } = GetContext();

    return (
        <section className="main-content"  data-aos="fade-up" data-aos-duration="1200">
            <CoolTitle
                front="درباره ما"
                behind="About.Us"
            />
            <div className="container">
                <div className="row mx-auto px-5">
                    <div className="row px-2">
                        <h4 className="text-warning text-uppercase custom-title mb-0 ft-wt-600">
                            گروه مهندسی و ساخت مهرزاد
                        </h4>
                    </div>
                    <div className="container">
                        <div className="row mb-5">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; به
                            خود می‌بالیم که با عنایت ایزد منان، تلاش روز افزون و
                            بهره‌گیری از دانش روز دنیا، خود را در عرصه صنعت
                            ساختمان مطرح نموده‌ایم. تلفیقی از تجارب ارزشمند و
                            تفکر معماران مطرح درکنار سرمایه انسانی متعهد، از
                            پایه های توانمندی گروه مهندسی و ساخت مهرزاد محسوب
                            می‌شود. همواره تلاش می‌کنیم با تکیه بر دانش فنی،
                            برخورداری از سوابق درخشان در صنعت ساختمان و قدم
                            برداشتن همگام با معماری بین المللی، زمینه‌ساز این
                            مهم باشیم.
                        </div>
                        <hr className="separator"/>
                        <div className="row mt-5">
                            <h4 className="text-warning text-uppercase custom-title mb-0 ft-wt-600">
                                همراه ما باشید...
                            </h4>
                        </div>
                        <div className="row">
                            {AboutData.staff instanceof Array &&
                                AboutData.staff.map((staff) => (
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-3 mx-auto">
                                        <div className="overlay-container col mx-auto">
                                            <img
                                                src={staff.avatar}
                                                alt="Avatar"
                                                className="overlay-image img-fluid"
                                                />

                                            <div class="overlay mt-3">
                                                <StaffInfo class="overlay-data ">
                                                    {staff}
                                                </StaffInfo>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
