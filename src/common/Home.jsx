import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Briefer from "../views/briefer/Briefer";
import Index from "../views/about/index";
import Address from "../views/contact/Address";
import Portfolio from "../views/portfolio/Portfolio";
import Blog from "../views/blog/Blog";
import Contact from "../views/contact/Contact";
import Social from "../views/contact/Social";
import SwitchDark from "./SwitchDark";
import Logo from "./Logo";

const menuItem = [
    { icon: "fa-home", menuName: "خانه" },
    { icon: "fa-user", menuName: "درباره" },
    { icon: "fa-briefcase", menuName: "پورتفولیو" },
    { icon: "fa-envelope-open", menuName: "تماس" },
    { icon: "fa-comments", menuName: "بلاگ" },
];

const Home = () => {

    return (
        <div className="yellow">
            <SwitchDark />
            <Logo />
            <Tabs>
                <div className="header">
                    <TabList className=" icon-menu revealator-slideup revealator-once revealator-delay1">
                        {menuItem.map((item, i) => (
                            <Tab className="icon-box" key={i}>
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
                    <TabPanel className="home ">
                        <div
                            className="container-fluid main-container container-home p-0 "
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
                                    درباره <span>ما</span>
                                </h1>
                                <span className="title-bg">About Us</span>
                            </div>
                            <Index />
                        </div>
                    </TabPanel>

                    <TabPanel className="portfolio">
                        <div
                            className="title-section text-left text-sm-center"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <h1>پورتوفولیو</h1>
                            <span className="title-bg">Portfolio</span>
                        </div>
                        <Portfolio />
                    </TabPanel>

                    <TabPanel className="contact">
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
                                <div className="col-12 col-lg-4">
                                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                                        اطلاعات تماس
                                    </h3>
                                    <b className="mb-4">
                                        از این طریق می توانید با ما ارتباط داشته
                                        باشید. مشتاق پیشنهادها و نظرات شما
                                        عزیزان هستیم.
                                    </b>
                                    <Address />

                                    <Social />
                                </div>

                                <div className="col-12 col-lg-8">
                                    <Contact />
                                </div>
                            </div>
                        </div>
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
                </div>
            </Tabs>
        </div>
    );
};

export default Home;
