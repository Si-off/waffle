import { create } from 'zustand';

interface LoginStore {
  accessToken: string;
  isLogin: boolean;
  isInit: boolean;
  setIsLogin: (state: boolean) => void;
  setIsInit: (state: boolean) => void;
  setAccessToken: (token: string) => void;
}

export const useLoginStore = create<LoginStore>((set) => ({
  isLogin: false,
  isInit: true,
  accessToken: '',
  setIsLogin: (state) => {
    set({ isLogin: state });
  },
  setIsInit: (state) => {
    set({ isInit: state });
  },
  setAccessToken: (state) => {
    set({ accessToken: state });
  },
}));
