
import { router } from '../trpc';
import { restaurantRouter } from './restaurants';

export const appRouter = router({
  restaurant: restaurantRouter,
});

export type AppRouter = typeof appRouter;
