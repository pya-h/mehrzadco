import React from "react";
import Preview from "../views/Preview";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ContextProvider from "../Context/ContextProvider";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
    return (
        <>
            <ContextProvider>
                <ScrollTopBehaviour />
                <Routes>
                    {/* <Route path="/" element={<Preview />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ContextProvider>
        </>
    );
};

export default AllRoutes;
