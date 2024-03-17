'use client';

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { getIsLogin, handleSignOut, useAuthStore } from '@/store/auth.store';
import { getUserInfo } from '@/api/auth/api';
import { rest } from '@/api/rest';
import { usePathname, useRouter } from 'next/navigation';
import { guestRoute } from '@/hook/usePermission';
import { getCookie } from 'cookies-next';

const RootProvider = ({ children }: any) => {
  const [rendered, setRendered] = useState(false);
  const queryClient = new QueryClient();

  const pathname = usePathname();
  const route = useRouter();

  useEffect(() => {
    setRendered(true);
  }, []);

  const { setIsLogin, setUserInfo, isLogin } = useAuthStore((state) => {
    return {
      setUserInfo: state.setUserInfo,
      setIsLogin: state.setIsLogin,
      isLogin: state.isLogin
    };
  });

  const { data, error } = useQuery({
    enabled: getIsLogin() && !guestRoute.includes(pathname),
    queryKey: [rest.get.userInfo, pathname],
    queryFn: getUserInfo,
  });

  // 유저 정보 담기
  useEffect(() => {
    const accesToken = getCookie('accessToken');
    if (!!accesToken) {
      if (data) {
        setUserInfo(data);
        setIsLogin(true);
      }
      if (error) {
        alert('로그인 세션이 만료되었습니다.');
        handleSignOut();
        route.push('/');
      }
    }
  }, [data, error, getCookie('accessToken')]);

  console.log("isLogin", isLogin)

  

  return rendered && <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default RootProvider;
