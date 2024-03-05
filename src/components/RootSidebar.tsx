'use client';

import { usePathname } from 'next/navigation';
import AdminSidebar from './Sidebar/Sidebar';

const RootSidebar = () => {
  const path = usePathname();
  const isAdminRoute = path.includes('admin') && !path.includes('login');

  return isAdminRoute && <AdminSidebar />;
};

export default RootSidebar;
