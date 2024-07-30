import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
          "service_vw32s8d",
          "template_1ni9sxl",
          form.current,
          "rwX7BIcRpzrtw1f8B"
          )
          .then(
            (result) => {
                  console.log("Sending")
                    toast.success("پیام شما با موفقیت ارسال شد.", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    document.getElementById("sendEmailForm").reset();
                },
                (error) => {
                    toast.error("هنگام ارسال پیام مشکلی بوجود آمد!", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    console.log(error);
                }
            );
    };

    return (
        <form
            id="sendEmailForm"
            className="contactform"
            ref={form}
            onSubmit={e => sendEmail(e)}
        >
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="نام شما"
                            required
                        />
                    </div>
                </div>
                {/* End .col */}

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <input
                            type="email"
                            name="user_email"
                            placeholder="ایمیل شما"
                            required
                        />
                    </div>
                </div>
                {/* End .col */}

                <div className="col-12 col-md-12">
                    <div className="form-group">
                        <input  
                            type="text"
                            name="subject"
                            placeholder="موضوع"
                            required
                        />
                    </div>
                </div>
                {/* End .col */}

                <div className="col-12">
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="متن پیام"
                            style={{height: "16rem"}}
                            required
                        ></textarea>
                    </div>
                </div>
                {/* End .col */}

                <div className="col-12">
                    <button type="submit" className="button">
                        <span className="button-text">ارسال پیام</span>
                        <span className="button-icon fa fa-send"></span>
                    </button>
                </div>
                {/* End .col */}
            </div>
        </form>
    );
};

export default ContactForm;
