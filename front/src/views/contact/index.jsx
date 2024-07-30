import CoolTitle from "../gadgets/CoolTitle";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {
    return (
        <div className="container" data-aos="fade-up" data-aos-duration="1200">
            <CoolTitle front="تماس با ما" behind="Contact.Us    " />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-11 col-lg-4 my-3">
                    <ContactInfo />
                </div>

                <div className="col-11 col-lg-7">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
