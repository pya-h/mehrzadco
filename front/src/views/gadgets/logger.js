import ApiService from "../../services/api";

export function logException(error) {
    const errorDetails = {
        message: error.message,
        stack: error.stack,
        url: window.location.href,
    };

    ApiService.post("/api/log/", { error: JSON.stringify(errorDetails) }).then(
        () => {}
    );
}
