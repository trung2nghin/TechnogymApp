import axios from 'axios';
import queryString from 'query-string';

const AxiosClient = axios.create({
  baseURL: 'http://192.168.227.98:8000/v1/',
  responseType: 'json',
  timeout: 5000,
  paramsSerializer: params => queryString.stringify(params),
});

AxiosClient.interceptors.request.use(
  async config => {
    const newConfig = config;
    return newConfig;
  },
  error => {
    return Promise.reject(error);
  },
);

export default AxiosClient;
