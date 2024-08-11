import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import ApiService from "../../services/api";
import { HttpStatusCode } from "axios";
import Toaster from "../gadgets/toast";

class ContactForm extends Component {
    state = {
        senderName: "",
        senderEmail: "",
        subject: "",
        text: "",
    };

    sendMessage = () => {
        const { senderEmail, senderName, text } = this.state;
        if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(senderEmail)
        ) {
            Toaster.warn("ایمیل وارد شده معتبر نیست!");
            return;
        }

        if (!senderName?.length || senderName.length < 3) {
            Toaster.warn(
                "لطفا نام خود را به درستی وارد کنید. نام شما باید حداقل 3 کاراکتر باشد."
            );
            return;
        }

        if (!text?.length || text.length < 3) {
            Toaster.warn(
                "لطفا متن پیام را به درستی وارد کنید. متن یک پیام باید حداقل 5 کاراکتر باشد."
            );
            return;
        }

        ApiService.post("/api/contact-us/", this.state).then((responseData) => {
            const { status } = responseData;
            if (+status === HttpStatusCode.Created) {
                Toaster.success("پیام شما با موفقیت ارسال شد.");
                this.setState({
                    senderName: "",
                    senderEmail: "",
                    subject: "",
                    text: "",
                });
            } else if (status === HttpStatusCode.BadRequest) {
                Toaster.error(
                    "ورودی ارسال شده معتبر نیست. لطفا از صحت اطلاعات ورودی خد اطمینان حاصل نمایید."
                );
            } else {
                Toaster.error(
                    "خطایی حین عملیات رخ داد. لطفا از اتصال اینترنت خود اطمینان حاصل کرده و دوباره تلاش کنید."
                );
            }
        });
    };

    render() {
        return (
            <div className="contactform">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                value={this.state.senderName}
                                placeholder="نام شما"
                                onChange={(e) =>
                                    this.setState({
                                        senderName: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <input
                                type="email"
                                name="user_email"
                                value={this.state.senderEmail}
                                placeholder="ایمیل شما"
                                onChange={(e) =>
                                    this.setState({
                                        senderEmail: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                value={this.state.subject}
                                placeholder="موضوع"
                                onChange={(e) =>
                                    this.setState({ subject: e.target.value })
                                }
                            />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="form-group">
                            <textarea
                                placeholder="متن پیام"
                                style={{ height: "16rem" }}
                                value={this.state.text}
                                onChange={(e) =>
                                    this.setState({ text: e.target.value })
                                }
                                required
                            ></textarea>
                        </div>
                    </div>

                    <div className="col-12">
                        <button
                            type="submit"
                            className="button"
                            onClick={this.sendMessage}
                        >
                            <span className="button-text">ارسال پیام</span>
                            <span className="button-icon fa fa-send"></span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;
