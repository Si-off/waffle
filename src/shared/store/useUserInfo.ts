import { create } from 'zustand';

interface UserInfo {
  user: null;
  isLogin: boolean;
  isInit: boolean;
  setIsLogin: (state: boolean) => void;
  setIsInit: (state: boolean) => void;
  setUser: (user: any) => void;
}

export const useUserInfo = create<UserInfo>((set) => ({
  user: null,
  isLogin: false,
  isInit: true,
  setIsLogin: (state) => {
    set({ isLogin: state });
  },
  setIsInit: (state) => {
    set({ isInit: state });
  },
  setUser: (user) => {
    set({ user });
  },
}));
