import React from "react";
import StaffInfo from "./StaffInfo";

const AboutUs = () => {
    return (
        <section className="main-content">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-12 mx-auto px-5">
                        <div className="row px-2">
                            <h4 className="text-warning text-uppercase custom-title mb-0 ft-wt-600">
                                شرکت مهندسی و ساخت مهرزاد
                            </h4>
                        </div>
                        <div className="container">
                            <div className="row my-5">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                به خود می‌بالیم که با عنایت ایزد منان، تلاش روز
                                افزون و بهره‌گیری از دانش روز دنیا، خود را در
                                عرصه صنعت ساختمان مطرح نموده‌ایم. تلفیقی از
                                تجارب ارزشمند و تفکر معماران مطرح درکنار
                                سرمایه انسانی متعهد، از پایه های توانمندی گروه
                                مهندسی و ساخت مهرزاد محسوب می‌شود. همواره تلاش می‌کنیم با
                                تکیه بر دانش فنی، برخورداری از سوابق درخشان در
                                صنعت ساختمان و قدم برداشتن همگام با معماری بین
                                المللی، زمینه‌ساز این مهم باشیم.
                            </div>
                            <hr />
                            <div className="row">
                                <div className="row">
                                    <h4 className="text-warning text-uppercase custom-title mb-0 ft-wt-600">
                                        با ما آشنا شوید ...
                                    </h4>
                                </div>
                            </div>

                            <div className="row">
                                <StaffInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
