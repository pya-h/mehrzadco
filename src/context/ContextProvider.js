import React, { createContext, useEffect, useState } from "react";
import AllBlogData from "./AllBlogData";
import ServicesData from "./ServicesData";
import PortfolioData from "./PortfolioData";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [tabIndex, setTabIndex] = useState(-1);
    useEffect(() => {
        setIsDark(
            localStorage.getItem("theme-color")?.toLowerCase() !== "light"
        );
    }, []);

    useEffect(() => {
        const tb = sessionStorage.getItem("tabIndex");
        setTabIndex(tb >= 0 ? tb : 0);
    }, []);

    window.onunload = () => {
        sessionStorage.setItem("tabIndex", tabIndex);
    }
    
    return <MyContext.Provider value={{
        ...AllBlogData(), isDark, setIsDark,
        tabIndex, setTabIndex,
        PortfolioData, ServicesData
    }}>
        {children}
    </MyContext.Provider>;
};

export default ContextProvider;
