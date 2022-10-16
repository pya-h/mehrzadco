import React, { createContext, useEffect, useState } from "react";
import AllBlogData from "./AllBlogData";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(
            localStorage.getItem("theme-color")?.toLowerCase() !== "light"
        );
    }, []);

    return <MyContext.Provider value={{...AllBlogData(), isDark, setIsDark}}>{children}</MyContext.Provider>;
};

export default ContextProvider;
