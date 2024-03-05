'use client';

import Header from './Header/Header';
import { usePathname } from 'next/navigation';

const RootHeader = () => {
  const path = usePathname();
  const isUserRoute = !path.includes('admin') && !path.includes('login') && !path.includes('signUp');

  return isUserRoute && <Header />;
};

export default RootHeader;
