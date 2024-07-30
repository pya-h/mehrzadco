import React from "react";
import GetContext from "../../context/GetContext";

const ContactInfo = () => {
    const { ContactData } = GetContext();
    return (
        <>
            <h2 className="text-warning mx-4 text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                اطلاعات تماس
            </h2>
            <hr />
            <b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; از این طریق می
                توانید با ما ارتباط داشته باشید. مشتاق پیشنهادها و نظرات شما
                عزیزان هستیم.
            </b>
            {ContactData instanceof Array &&
                ContactData.map((field) => (
                    <div className="contact-field mt-3">
                        <p className="custom-span-contact position-relative">
                            {field.icon}
                            <span className="d-block">{field.label}</span>
                            {field.href ? (
                                <a dir="ltr" href={field.href}>
                                    {field.value}
                                </a>
                            ) : (
                                field.value
                            )}
                        </p>
                    </div>
                ))}
        </>
    );
};

export default ContactInfo;
