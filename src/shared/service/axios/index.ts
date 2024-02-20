import axios, { AxiosRequestConfig } from 'axios';
import injectInterceptors from './interceptors';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const instance = injectInterceptors(axios.create({ baseURL: BASE_URL }));

export const getAxiosInstance = (endpoint: string) => {
  const get = async <T>(queries: object = {}) => {
    try {
      const res = await instance.get<T>(endpoint, {
        params: queries,
      } as AxiosRequestConfig);
      const { data, status } = res;
      return { ...data, status };
    } catch (error) {
      console.error(error);
    }
  };
  const post = async <T>(params: object = {}, config?: AxiosRequestConfig) => {
    try {
      const res = await instance.post<T>(endpoint, params, config);
      const { data, status } = res;
      return { ...data, status };
    } catch (error) {
      console.error(error);
    }
  };
  const patch = async <T>(params: object = {}, config?: AxiosRequestConfig) => {
    try {
      const res = await instance.patch<T>(endpoint, params, config);
      const { data, status } = res;
      return { ...data, status };
    } catch (error) {
      console.error(error);
    }
  };
  const remove = async <T>(params: object = {}) => {
    try {
      const res = await instance.delete<T>(endpoint, {
        data: params,
      });
      const { data, status } = res;
      return { ...data, status };
    } catch (error) {
      console.error(error);
    }
  };
  return { get, post, patch, remove };
};

export default getAxiosInstance;
