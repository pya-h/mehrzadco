import React, { useState, useRef } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ImplementationProcess = ({ children }) => {
    const [selectedTab, selectTab] = useState(-1);
    const descriptionRef = useRef(null);

    const handleSelectTab = (index) => {
        selectTab(index);

        if (index >= 0 && descriptionRef.current) {
            descriptionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <Tabs
                defaultIndex={selectedTab}
                onSelect={handleSelectTab}
            >
                <TabList className="row text-center" style={{ alignItems: "center", justifyContent: "center" }}>
                    {children.map((tab, index) => (
                        <Tab
                            key={index}
                            style={{
                                color: "black",
                                ...(index === selectedTab
                                    ? {
                                          boxShadow: "0rem 0rem 1.5rem 1.5rem #ffb422",
                                      }
                                    : null),
                            }}
                            className={`my-0 col-lg-2 col-md-3 col-6 col-sm-6 mx-2 my-2 topic-circles text-dark ${
                                index === selectedTab ? "bg-white" : ""
                            }`}
                        >
                            {tab.icon}
                            <br />
                            <span>
                                {tab.title}
                            </span>
                        </Tab>
                    ))}
                </TabList>

                {selectedTab >= 0 ? (
                    <div
                        ref={descriptionRef}
                        style={{
                            border: "5px dotted black",
                            borderRadius: "15px",
                            marginLeft: "10%",
                            marginRight: "10%",
                        }}
                        className="px-5 circles-and-topics-tabs my-5"
                    >
                        {children.map((tab, index) => (
                            <div key={index} className="my-5">
                                <TabPanel>{tab.topic}</TabPanel>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-5 d-block" style={{ marginBottom: "15%" }}></div>
                )}
            </Tabs>
        </>
    );
};

export default ImplementationProcess;
