import React, { useEffect } from "react";
import GetContext from "../../context/GetContext";
import StaffInfo from "./StaffInfo";
import avatar from "./img_avatar.png";

const AboutUs = () => {
    const { AboutData } = GetContext();

    useEffect(() => {}, []);
    return (
        <section className="main-content">
            <div className="container">
                <div className="row mx-auto px-5">
                    <div className="row px-2">
                        <h4 className="text-warning text-uppercase custom-title mb-0 ft-wt-600">
                            شرکت مهندسی و ساخت مهرزاد
                        </h4>
                    </div>
                    <div className="container">
                        <div className="row my-5">
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
                        <div className="row my-5">
                            <div className="row">
                                <h4 className="text-warning text-uppercase custom-title mb-0 ft-wt-600">
                                    همراه ما باشید...
                                </h4>
                            </div>
                        </div>
                        <hr />
                        <div className="row my-2">
                            <div className="row">
                                <h4 className="text-warning text-uppercase custom-title mb-0 ft-wt-600">
                                    و اما پرسنل این مجموعه:
                                </h4>
                            </div>
                        </div>
                        
                        <div className="row">
                            {AboutData.staff instanceof Array &&
                                AboutData.staff.map((staff) => (
                                    <div className="col-lg-4 col-md-4 col-6 my-3 mx-auto">
                                        <div className="overlay-container col mx-auto">
                                            <img
                                                src={avatar}
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
