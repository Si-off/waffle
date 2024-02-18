import { Cookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const setCookie = (name: string, value: string, options?: CookieSetOptions) => {
  return cookies.set(name, value, { ...options });
};

export const removeCookie = (name: string, option?: CookieSetOptions) => {
  return cookies.remove(name, { ...option });
};
