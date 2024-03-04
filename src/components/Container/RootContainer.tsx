'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '../Header/Header';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // query options
      refetchOnWindowFocus: false,
      retry: false,
    },
    mutations: {
      // mutation options
    },
  },
});

export default function RootContainer({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {children}
    </QueryClientProvider>
  );
}
