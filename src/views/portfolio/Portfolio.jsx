import React, { Fragment, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import GetContext from "../../context/GetContext";
import CoolTitle from "../gadgets/CoolTitle";
import ProjectList from "./ProjectList";
import ProjectReview from "./ProjectReview";

const Portfolio = () => {
    const { PortfolioData, selectedProjectID, setSelectedProjectID } =
        GetContext();
    const [imageIndex, setImageIndex] = useState(0);
    const [project, setProject] = useState(null);

    useEffect(() => {
        try {
            if (selectedProjectID !== -1 && PortfolioData instanceof Array) {
                setProject(
                    PortfolioData.find((p) => p.id === selectedProjectID)
                );
            } else setProject(null);
        } catch (ex) {
            console.log(ex);
            setProject(null);
        }
    }, [selectedProjectID, PortfolioData]);

    return project ? (
        <ProjectReview
            imageIndex={imageIndex}
            onBtnBackClick={() => {
                setProject(null);
                setSelectedProjectID(-1);
            }}
        >
            {project}
        </ProjectReview>
    ) : (
        <Fragment>
            <div  data-aos="fade-up" data-aos-duration="1200" className="portfolio-main">
                <CoolTitle front="پروژه ها" behind="Portfolio" />

                <Tabs>
                    <TabList className="portfolio-tab-list" data-aos="fade-up">
                        {PortfolioData.map((pd) => (
                            <Tab>
                                <h3>{pd.title?.fa}</h3>
                            </Tab>
                        ))}
                    </TabList>

                    <div className="container">
                        {PortfolioData.map((porto) => (
                            <TabPanel>
                                <div className="tab-container">
                                    {porto.image.map((item, index) => (
                                        <ProjectList
                                            select={(id, index) => {
                                                if (id >= 0) {
                                                    setSelectedProjectID(id);
                                                    setImageIndex(index);
                                                }
                                            }}
                                            index={index}
                                        >
                                            {porto}
                                        </ProjectList>
                                    ))}
                                </div>
                            </TabPanel>
                        ))}
                    </div>
                </Tabs>
            </div>
        </Fragment>
    );
};

export default Portfolio;
