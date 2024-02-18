import { getCookie, removeCookie, setCookie } from './cookie';

type TokenType = 'access_token' | 'refresh_token';

export const getToken = (type: TokenType) => {
  return getCookie(type);
};

export const setToken = (type: TokenType, value: string) => {
  setCookie(type, value, { httpOnly: true });
};

export const removeToken = (type: TokenType) => {
  removeCookie(type);
};
