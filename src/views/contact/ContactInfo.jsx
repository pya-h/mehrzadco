import React from "react";

const ContactInfo = () => {
    return (
        <>
            <h2 className="text-warning mx-4 text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                اطلاعات تماس
            </h2>
            <hr />
            <b>
                از این طریق می توانید با ما ارتباط داشته باشید. مشتاق پیشنهادها
                و نظرات شما عزیزان هستیم.
            </b>
            <p className="custom-span-contact mt-3   position-relative">
                <i className="fa fa-map position-absolute"></i>
                <span className="d-block">آدرس</span>
                گیلان، تالش، خیابان طالقانی، جنب اداره ی آبیاری
            </p>
            {/* End .custom-span-contact */}

            <p className="custom-span-contact position-relative">
                <i className="fa fa-envelope-open position-absolute"></i>
                <span className="d-block">آدرس ایمیل</span>{" "}
                <a href="mailto:mehrzad.construction.co@gmail.com">
                    mehrzad.construction.co@mail.com
                </a>
            </p>
            {/* End .custom-span-contact */}
            <p className="custom-span-contact position-relative">
                <i className="fa fa-phone-square position-absolute"></i>
                <span className="d-block">دفتر مرکزی</span>{" "}
                <a dir="ltr" href="Tel: +98 134 4236 833">
                    0134 423 6833
                </a>
            </p>

            <p className="custom-span-contact position-relative">
                <i className="fa fa-mobile px-2 position-absolute"></i>
                <span className="d-block">دفتر فروش</span>{" "}
                <a dir="ltr" href="Tel: +98 911 338 4825">
                    0911 338 4825
                </a>
            </p>

            <p className="custom-span-contact position-relative">
                <i className="fa fa-volume-control-phone position-absolute"></i>
                <span className="d-block">روابط عمومی</span>{" "}
                <a dir="ltr" href="Tel: +98 911 285 8020">
                    0911 285 8020
                </a>
            </p>

            {/* End .custom-span-contact */}
        </>
    );
};

export default ContactInfo;
