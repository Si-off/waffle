import { QueryClient } from '@tanstack/react-query';

const getClient = (() => {
  let client: QueryClient | null = null;

  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      });
    return client;
  };
})();

export default getClient;

export const QueryKeys = {
  USER: 'USER',
} as const;
