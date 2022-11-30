import axios from 'axios';
import queryString from 'query-string';

const AxiosClient = axios.create({
  baseURL: 'http://192.168.1.46:8000/v1/',
  responseType: 'json',
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
