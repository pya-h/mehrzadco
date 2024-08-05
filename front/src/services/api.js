import axios from 'axios';

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
                console.error('Client error:', response.data);
            }
            if (response.status >= 500) {
                console.error('Server error:', response.data);
            }
        } else {
            console.error('Network error:', error.message);
        }
        return Promise.reject(error);
    }
);

const ApiService = {
    get: async(path, options = {}) => {
        const { params, headers } = options;
        try {
            const response = await axiosInstance.get(path, { params, headers });
            // console.log("response = ", response)
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