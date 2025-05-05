const axios = require("axios");

const AxiosService = axios.create(
    {
        baseURL: 'http://localhost:8888',
        responseType: 'json'
    }
);

export default AxiosService;