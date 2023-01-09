import axios from 'axios';
import AppEndpoint from './AppEndpoints';

const AxiosManager = axios.create({
    baseURL: AppEndpoint.API_URL,
    timeout: 100,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

AxiosManager.interceptors.request.use(
    config => {
        return config;
    }
);

AxiosManager.interceptors.response.use(
    response => {

        return response;
    }
);


export default AxiosManager;