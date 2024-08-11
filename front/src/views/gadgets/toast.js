import { toast } from "react-toastify";

const commonOptions = {
    style: { direction: "rtl", fontFamily: "Vazir-Bold", fontSize: "15px" },
};

const Toaster = {
    error: (message, options = null) =>
        toast.error(
            message,
            !options ? commonOptions : { ...commonOptions, options }
        ),

    success: (message, options = null) =>
        toast.success(
            message,
            !options ? commonOptions : { ...commonOptions, options }
        ),

    warn: (message, options = null) =>
        toast.warn(
            message,
            !options ? commonOptions : { ...commonOptions, options }
        ),

    info: (message, options = null) =>
        toast.info(
            message,
            !options ? commonOptions : { ...commonOptions, options }
        ),
};

export default Toaster;
