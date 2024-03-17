'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import RootHeader from './RootHeader';
import RootProvider from './RootProvider';

const RootContainer = ({ children }: any) => {
  const [rendered, setRendered] = useState(false);
  const queryClient = new QueryClient();

  useEffect(() => {
    setRendered(true);
  }, []);
  return (
    rendered && (
      <QueryClientProvider client={queryClient}>
        <RootProvider>
          <RootHeader />
          {children}
        </RootProvider>
      </QueryClientProvider>
    )
  );
};

export default RootContainer;
