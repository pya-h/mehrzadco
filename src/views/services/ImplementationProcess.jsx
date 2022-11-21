import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ImplementationProcess = ({ children }) => {
    const [selectedTab, selectTab] = useState(-1);

    return (
        <>
            <Tabs
                defaultIndex={selectedTab}
                onSelect={(index) => selectTab(index)}
            >
                <TabList className="row text-center" style={{alignItems: "center", justifyContent: "center"}}>
                    {children.map((tab, index) => (
                        <Tab
                            key={index}
                            style={{
                                color: "black",
                                ...(index === selectedTab
                                    ? {
                                          boxShadow: "0 30px 48px 0 #ffb422",
                                      }
                                    : null),
                            }}
                            className={`my-0 col-lg-2 col-md-3 col-6 col-sm-6 mx-2 my-2 topic-circles text-dark ${
                                index === selectedTab ? "bg-white" : ""
                            }`}
                        >
                            {tab.icon}
                            <br />
                            <span style={{ fontSize: "14px" }}>
                                {tab.title}
                            </span>
                        </Tab>
                    ))}
                </TabList>
                {selectedTab >= 0 ? <div style={{border: "5px dotted black", borderRadius: "15px", marginLeft: "10%", marginRight: "10%"}} className="px-5 circles-and-topics-tabs my-5">
                    {children.map((tab, index) => (
                        <div className="my-5">
                            <TabPanel key={index}>{tab.topic}</TabPanel>
                        </div>
                    ))}
                </div> : <div className="py-5 d-block" style={{marginBottom: "15%"}}></div>}
            </Tabs>
        </>
    );
};

export default ImplementationProcess;
