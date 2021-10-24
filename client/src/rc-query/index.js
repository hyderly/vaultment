import * as allKeys from './keys';
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ globally default to 1 day
      staleTime: 1000 * 84600,
    },
  },
});

export const keys = allKeys;
