'use client';

import { usePathname } from 'next/navigation';
import Header from './Header/Header';

const HeaderContainer = ({ children }: any) => {
  const path = usePathname();

  const isAdminRoute = path.includes('admin');

  return (
    <div>
      {!isAdminRoute && <Header />}
      <div>{children}</div>
    </div>
  );
};

export default HeaderContainer;
