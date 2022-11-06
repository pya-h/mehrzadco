import React, { Fragment, useEffect } from "react";
import Home from "./Home";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "./ScrollTopBehaviour";
import { change } from "../tools";

const AllRoutes = () => {

    useEffect(() => {
        const theme = localStorage.getItem("theme-color")?.toLowerCase();

        change.theme(theme);

        const lang = localStorage.getItem("lang")?.toLowerCase();
        change.language(lang);
    }, []);

    return (
        <Fragment>
            <ScrollTopBehaviour />
            <Routes>
                {/* <Route path="/" element={<Preview />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/mehrzadco" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </Fragment>
    );
};

export default AllRoutes;
