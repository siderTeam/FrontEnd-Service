import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const guestRoute = ['/', '/login', '/signUp'];

const getPermission = (userType: 'user' | 'admin' | 'guest') => {
  if (userType === 'user') {
    return ['/'];
  } else if (userType === 'guest') {
    return guestRoute;
  } else if (userType === 'admin') {
    return ['/'];
  }

  return [];
};

export const getOriginalRouteFromCurrentPath = (currentPath: string) => {
  const dynamicRoute = guestRoute.find((route) => {
    // 현재 경로와 동적 라우트가 매치되는지 확인
    const dynamicSegments = route.split('/').map((segment, index) => {
      if (segment.startsWith(':')) {
        return currentPath.split('/')[index];
      }
      return segment;
    });

    return currentPath === dynamicSegments.join('/');
  });

  return dynamicRoute || currentPath;
};

const usePermission = (path: string, permission: 'user' | 'guest' | 'admin') => {
  const [isCheckPermission, setIsCheckPermission] = useState(true);
  const pathName = usePathname();
  const route = useRouter();

  useEffect(() => {
    const permissionRoutes = getPermission(permission);
    if (permissionRoutes[0] === '*') {
      setIsCheckPermission(true);
      return;
    }

    const originalRoute = getOriginalRouteFromCurrentPath(pathName);

    if (permissionRoutes.includes(pathName) === false && permissionRoutes.includes(originalRoute) === false) {
      setIsCheckPermission(false);
      route.push('/');
    } else {
      setIsCheckPermission(true);
    }
  }, [pathName]);

  const handleClickCheckPermission = (e: any) => {
    const permissionRoutes = getPermission(permission);
    if (permissionRoutes[0] === '*') {
      setIsCheckPermission(true);
      return true;
    }

    if (permissionRoutes.includes(path) === false) {
      setIsCheckPermission(false);
      e.preventDefault();
      return false;
    } else {
      setIsCheckPermission(true);
      return true;
    }
  };

  const getOriginalRouteFromCurrentPath = (currentPath: string) => {
    const splitCurrentPath = currentPath.split('/');

    const lastSplitCurrentPath = splitCurrentPath[splitCurrentPath.length - 1];
    const result = parseInt(lastSplitCurrentPath);
    if (Number.isNaN(result)) return currentPath;
    const dynamicRoute = guestRoute.find((route) => {
      // 현재 경로와 동적 라우트가 매치되는지 확인
      const dynamicSegments = route.split('/').map((segment, index) => {
        if (segment.startsWith(':')) {
          return currentPath.split('/')[index];
        }
        return segment;
      });

      return currentPath === dynamicSegments.join('/');
    });

    return dynamicRoute || currentPath;
  };

  return { isCheckPermission, handleClickCheckPermission };
};
export default usePermission;
