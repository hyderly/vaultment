import axios from 'axios';

import { API_BASE_URL } from '@Constants/config';
import { apiWrapper } from './interceptors';
// const host = window.location.origin;

const request = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30 * 1000,
});
// request.interceptors.response.use(null, errorInterceptor);
// request.interceptors.request.use(requestInterceptor);

const usersApi = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      request
        .get('/user')
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error.response.data.message);
        });
    });
  },
};

export default apiWrapper(usersApi, ['getUsers']);
