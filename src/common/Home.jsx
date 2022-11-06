import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Briefer from "../views/briefer/Briefer";
import AboutUs from "../views/about";
import OurServices from "../views/services";
import ContactInfo from "../views/contact/ContactInfo";
import Portfolio from "../views/portfolio/Portfolio";
import Blog from "../views/blog/Blog";
import ContactForm from "../views/contact/ContactForm";
import SwitchDark from "./SwitchDark";
import Logo from "./Logo";
import GetContext from "../context/GetContext";
import SocialLinks from "./SocialLinks";

const menuItem = [
    { icon: "fa-home", menuName: "خانه" },
    { icon: "fa-spinner", menuName: "خدمات" },
    { icon: "fa-briefcase", menuName: "پورتفولیو" },
    { icon: "fa-comments", menuName: "بلاگ" },
    { icon: "fa-user", menuName: "درباره" },
    { icon: "fa-envelope-open", menuName: "تماس" },
];

const Home = () => {
    const { tabIndex, setTabIndex, mode } = GetContext();

    return (
        <div className="yellow">
            <SwitchDark />
            <Logo />
            {Boolean(tabIndex >= 0) && (
                <Tabs defaultIndex={tabIndex} >
                    <div className="header">
                        <TabList className=" icon-menu revealator-slideup revealator-once revealator-delay1">
                            {menuItem.map((item, i) => (
                                <Tab
                                    className="icon-box"
                                    key={i}
                                    // onClick={() => sessionStorage.setItem("tabIndex", i) }
                                    onClick={() => setTabIndex(i)}
                                >
                                    <i className={`fa ${item.icon}`}></i>
                                    <h2
                                        style={{ fontWeight: "bold" }}
                                        className="text-danger"
                                    >
                                        {item.menuName}
                                    </h2>
                                </Tab>
                            ))}
                        </TabList>
                    </div>

                    <div className="tab-panel_list">
                        <TabPanel className="home">
                            <div
                                className="container-fluid main-container container-home"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <div className="color-block d-none d-lg-block"></div>
                                <Briefer />
                            </div>
                        </TabPanel>

                        <TabPanel className="about">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <div className="title-section text-left text-sm-center">
                                    <h1>
                                        خدمات <span>ما</span>
                                    </h1>
                                    <span className="title-bg">About Us</span>
                                </div>
                                <OurServices />
                            </div>
                        </TabPanel>

                        <TabPanel className="portfolio">
                            <Portfolio />
                        </TabPanel>

                        <TabPanel className="blog">
                            <div
                                className="title-section text-left text-sm-center "
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <h1>بلاگ</h1>
                                <span className="title-bg">Blog</span>
                            </div>
                            <div
                                className="container"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <div className="row pb-50">
                                    <Blog />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="about">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <div className="title-section text-left text-sm-center">
                                    <h1>
                                        درباره <span>ما</span>
                                    </h1>
                                    <span className="title-bg">About Us</span>
                                </div>
                                <AboutUs />
                            </div>
                        </TabPanel>

                        <TabPanel className={`contact ${!mode.large ? "pb-4" : ""}`}>
                            <div
                                className="title-section text-left text-sm-center"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <h1>
                                    تماس <span>با ما</span>
                                </h1>
                                <span className="title-bg">Contact Us</span>
                            </div>
                            <div
                                className="container"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-11 col-lg-4 my-3 mx-auto">
                                        <ContactInfo />
                                    </div>

                                    <div className="col-11 col-lg-7 mx-auto">
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            )}
            <SocialLinks />
        </div>
    );
};

export default Home;
