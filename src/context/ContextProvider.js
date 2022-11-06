import React, { createContext, useEffect, useState } from "react";
import AllBlogData from "./AllBlogData";
import ServicesData from "./ServicesData";
import PortfolioData from "./PortfolioData";
import { useMediaQuery } from "react-responsive";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [tabIndex, setTabIndex] = useState(-1);
    const modeSmall = useMediaQuery({ query: "(max-width: 768px)" });
    
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
            PortfolioData, ServicesData,
            mode: {
                small: modeSmall,
                medium: useMediaQuery({ query: "(max-width: 1200px)" }) && !modeSmall,
                large: useMediaQuery({ query: "(min-width: 1200px) " })
            }
    }}>
        {children}
    </MyContext.Provider>;
};

export default ContextProvider;
