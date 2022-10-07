import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import ProjectList from "./ProjectList";
import ProjectReview from "./ProjectReview";

const Portfolio = () => {
    const [selectedProjectID, setSelectedProjectID] = useState(-1);
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
    }, [selectedProjectID]);

    return project ? (
        <ProjectReview>{project}</ProjectReview>
    ) : (
        <div className="portfolio-main">
            <Tabs>
                <TabList className="portfolio-tab-list" data-aos="fade-up">
                    <Tab>ساختمان مهرزاد</Tab>
                    <Tab>دیگران</Tab>
                </TabList>

                <div className="container">
                    {PortfolioData.map((porto) => (
                        <TabPanel>
                            <div className="tab-container">
                                {porto.image.map((item, index) => (
                                    <ProjectList
                                        select={setSelectedProjectID}
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
    );
};

export default Portfolio;
