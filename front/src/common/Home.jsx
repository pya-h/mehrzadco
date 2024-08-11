import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Briefer from "../views/briefer/Briefer";
import AboutUs from "../views/about";
import OurServices from "../views/our-services";
import Portfolio from "../views/portfolio/Portfolio";
import SwitchDark from "./SwitchDark";
import Logo from "./Logo";
import GetContext from "../context/GetContext";
import SocialLinks from "./SocialLinks";
import ContactUs from "../views/contact";
import BlogsSection from "../views/blog";

const menuItem = [
    { icon: "fa-home", menuName: "خانه" },
    { icon: "fa-spinner", menuName: "خدمات" },
    { icon: "fa-briefcase", menuName: "پورتفولیو" },
    { icon: "fa-comments", menuName: "بلاگ" },
    { icon: "fa-user", menuName: "درباره" },
    { icon: "fa-envelope-open", menuName: "تماس" },
];

const Home = () => {
    const { tabIndex, changeTab, Screen } = GetContext();

    return (
        <div className="yellow">
            <SwitchDark />
            <Logo />
            {Boolean(tabIndex >= 0) && (
                <Tabs
                    onSelect={(index) => changeTab(index)}
                    defaultIndex={tabIndex}
                >
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
                        <TabPanel className="home">

                                <Briefer />

                        </TabPanel>

                        <TabPanel className="about">
                            <OurServices />
                        </TabPanel>

                        <TabPanel
                            className="portfolio"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <Portfolio />
                        </TabPanel>

                        <TabPanel className="blog">
                            <BlogsSection />
                        </TabPanel>
                        <TabPanel className="about">
                            <AboutUs />
                        </TabPanel>

                        <TabPanel
                            className={`contact ${!Screen.large ? "pb-4" : ""}`}
                        >
                            <ContactUs />
                        </TabPanel>
                    </div>
                </Tabs>
            )}
            <SocialLinks />
        </div>
    );
};

export default Home;
