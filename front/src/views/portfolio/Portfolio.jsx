import React, { Fragment, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CoolTitle from "../gadgets/CoolTitle";
import ProjectPreviewBox from "./ProjectPreviewBox";
import ProjectReview from "./ProjectReview";
import ApiService from "../../services/api";
import { HttpStatusCode } from "axios";

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        (async () => {
            const responseData = await ApiService.get(
                "/portfolio/constructions"
            );
            const { data, status } = responseData;
            if (+status === HttpStatusCode.Ok) setProjects(data);
        })();
    }, []);

    return selectedProject ? (
        <ProjectReview onBtnBackClick={() => setSelectedProject(null)}>
            {selectedProject}
        </ProjectReview>
    ) : (
        <Fragment>
            <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="portfolio-main"
            >
                <CoolTitle front="پروژه ها" behind="Portfolio" />

                <Tabs>
                    <TabList className="portfolio-tab-list" data-aos="fade-up">
                        <Tab>
                            <h3>ساختمان ها</h3>
                        </Tab>
                    </TabList>

                    <div className="container">
                        <TabPanel>
                            <div className="tab-container">
                                {projects.map((item) => (
                                    <ProjectPreviewBox
                                        select={setSelectedProject}
                                    >
                                        {item}
                                    </ProjectPreviewBox>
                                ))}
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </Fragment>
    );
};

export default Portfolio;
