import { deleteCookie } from 'cookies-next';
import { USER_INFO_RESPONSE } from '@/api/auth/model';
import { PersistOptions, persist } from 'zustand/middleware';
import { signOut } from '@/api/auth/api';
import { StateCreator, create } from 'zustand';

interface Type {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  userInfo: USER_INFO_RESPONSE;
  setUserInfo: (userInfo: USER_INFO_RESPONSE) => void;
  signOut: () => void;
}

export const initialUserInfo = {
  id: 0,
  username: '',
  user: true,
  name: '',
  nickname: '',
  career: 0,
  introduction: '',
  phone: '',
  positionCode: 0,
};

export type USER_STORE_PERSIST = (config: StateCreator<Type>, options: PersistOptions<Type>) => StateCreator<Type>;

export const useAuthStore = create<Type>()(
  (persist as USER_STORE_PERSIST)(
    (set) => ({
      isLogin: false,
      setIsLogin: (isLogin) => set(() => ({ isLogin })),
      userInfo: initialUserInfo,
      setUserInfo: (userInfo) => set({ userInfo }),
      signOut: async () => {
        await signOut();
        deleteCookie('accessToken');
        return set({ userInfo: initialUserInfo, isLogin: false });
      },
    }),
    {
      name: 'userInfo',
    },
  ),
);

export const handleSignOut = () => {
  const storeState = useAuthStore.getState();
  return storeState.signOut();
};

export const getIsLogin = (): boolean => {
  const storeState = useAuthStore.getState();
  return storeState.isLogin;
};

export const getUserInfo = (): USER_INFO_RESPONSE => {
  const storeState = useAuthStore.getState();
  return storeState.userInfo;
};
