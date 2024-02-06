"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import Navigation from "./Navigation/Navigation";

const RootContainer = ({ children }: any) => {
  const [rendered, setRendered] = useState(false);
  const queryClient = new QueryClient();

  useEffect(() => {
    setRendered(true);
  }, []);

  return rendered && (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      {children}
    </QueryClientProvider>
  );
};

export default RootContainer;