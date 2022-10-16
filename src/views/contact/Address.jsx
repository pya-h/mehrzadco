import React from "react";

const Address = () => {
  return (
    <>
      <p className="custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">آدرس</span>
        گیلان، تالش، خیابان طالقانی، جنب اداره ی آبیاری
      </p>
      {/* End .custom-span-contact */}

      <p className="custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">آدرس ایمیل</span>{" "}
        <a href="mailto:steve@mail.com">steve@mail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">شماره تماس</span>{" "}
        <a dir="ltr" href="Tel: +13 44 236 833">+13 44236833</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
