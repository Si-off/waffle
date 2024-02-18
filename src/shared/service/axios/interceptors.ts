import qs from 'qs';
import { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getToken, removeToken } from '@/shared/utils/token';
import { useLoginStore } from '@/shared/store/useLoginStore';

const injectInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.defaults.paramsSerializer = (params) => {
    return qs.stringify(params);
  };

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
      } else {
        config.headers['Content-Type'] = 'application/json';
      }
      if (config.headers.Authorization) return config;

      const { accessToken } = useLoginStore.getState();
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error: AxiosError) => {
      console.error(error);
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const { config, response } = error;
      let isRefreshing = false;
      if (response?.status === 401 || response?.status === 404) {
        if (!isRefreshing) {
          const { accessToken } = useLoginStore.getState();
          const token = getToken('refresh_token');
          const refreshToken = token as string;

          isRefreshing = true;
          try {
            if (!refreshToken) {
              return Promise.reject(error);
            }

            if (accessToken) {
              config.headers['Authorization'] = `Bearer ${accessToken}`;
            }

            isRefreshing = true;
            return instance.request(config);
          } catch (refreshError) {
            isRefreshing = false;
            alert('다시 로그인 해주세요.');
            removeToken('refresh_token');
            window.location.replace('/user');
            return Promise.reject(refreshError);
          }
        }
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

export default injectInterceptors;
