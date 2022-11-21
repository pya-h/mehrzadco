import React, { useEffect } from "react";
import ScrollToTop from "./common/ScrollToTop";
import AllRoutes from "./common/MainRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import ContextProvider from "./context/ContextProvider";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
    // this for animation
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });

    }, []);

    return (
        <ContextProvider>
            <AnimatedCursor
                innerSize={8}
                outerSize={44}
                color="255, 160, 1"
                outerAlpha={0.3}
                innerScale={0.7}
                outerScale={0.8}
            />
            <ScrollToTop />
            <AllRoutes />
            {/* End contact */}
            <ToastContainer />
            {/* Same as */}
        </ContextProvider>
    );
};

export default App;
