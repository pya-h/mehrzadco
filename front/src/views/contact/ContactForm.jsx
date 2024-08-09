import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ContactForm extends Component {
  state = {
    senderName: "",
    senderEmail: "",
    subject: "",
    text: "",
  };
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <input type="text" placeholder="نام شما" required />
          </div>
        </div>

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

        <div className="col-12 col-md-12">
          <div className="form-group">
            <input type="text" name="subject" placeholder="موضوع" required />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <textarea
              placeholder="متن پیام"
              style={{ height: "16rem" }}
              required
            ></textarea>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="button">
            <span className="button-text">ارسال پیام</span>
            <span className="button-icon fa fa-send"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default ContactForm;
