import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";
import { change } from "./tools";

const App = () => {
    // this for animation
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
        const theme = localStorage.getItem("theme-color")?.toLowerCase();

        change.theme(theme);

        const lang = localStorage.getItem("lang")?.toLowerCase();
        change.language(lang);
    }, []);

    return (
        <>
            <AnimatedCursor
                innerSize={8}
                outerSize={44}
                color="255, 160, 1"
                outerAlpha={0.3}
                innerScale={0.7}
                outerScale={1.2}
            />
            <ScrollToTop />
            <AllRoutes />
            {/* End contact */}
            <ToastContainer />
            {/* Same as */}
        </>
    );
};

export default App;
