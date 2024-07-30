import React, { useEffect } from "react";
import ScrollToTop from "./common/ScrollToTop";
import AllRoutes from "./common/MainRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import ContextProvider from "./context/ContextProvider";

const App = () => {
    // this for animation
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });

    }, []);

    return (
        <ContextProvider>

            <ScrollToTop />
            <AllRoutes />
            {/* End contact */}
            <ToastContainer />
            {/* Same as */}
        </ContextProvider>
    );
};

export default App;
