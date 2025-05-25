import { router } from './api/trpc';
import { restaurantRouter } from './api/routers/restaurants';

export const appRouter = router({
  restaurant: restaurantRouter,
});

export type AppRouter = typeof appRouter;
