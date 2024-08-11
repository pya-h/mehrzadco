import axios from 'axios';
import Toaster from '../views/gadgets/toast';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    async config => {
        return config;
    },
    async error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    async response => {
        return response;
    },
    async error => {
        const { response } = error;
        if (response) {
            if (response.status >= 400 && response.status < 500) {
                Toaster.warn(
                    "ورودی ارسال شده معتبر نیست. لطفا از صحت اطلاعات ورودی خد اطمینان حاصل نمایید."
                );
            }
            if (response.status >= 500) {
                Toaster.error(
                    "خطایی حین عملیات رخ داد. لطفا از اتصال اینترنت خود اطمینان حاصل کرده و دوباره تلاش کنید."
                );
            }
        } else {
            Toaster.error(
                "خطایی حین عملیات رخ داد. لطفا از اتصال اینترنت خود اطمینان حاصل کرده و دوباره تلاش کنید."
            );
        }
        return Promise.reject(error);
    }
);

const ApiService = {
    get: async(path, options = {}) => {
        const { params, headers } = options;
        try {
            const response = await axiosInstance.get(path, { params, headers });
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    },

    post: async(path, data = {}, options = {}) => {
        const { headers } = options;
        try {
            const response = await axiosInstance.post(path, data, { headers });
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    },
};

export default ApiService;