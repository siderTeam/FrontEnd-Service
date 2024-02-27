'use client';

import { useEffect, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const RootContainer = ({ children }: any) => {
  const [redered, setRedered] = useState(false);
  const queryClient = new QueryClient();

  useEffect(() => {
    setRedered(true);
  }, []);

  return redered ? (
    <QueryClientProvider client={queryClient}>
      <div style={{ zIndex: 9999 }}>{children}</div>
    </QueryClientProvider>
  ) : (
    <span>렌더안댐</span>
  );
};

export default RootContainer;
