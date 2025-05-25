import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { prisma } from '../../db';

export const restaurantRouter = router({
getRestaurants: publicProcedure.query(async () => {
  try {
    const data = await prisma.restaurant.findMany();
    return data;
  } catch (error) {
    console.error("Error in getRestaurants:", error);
    throw error; // rethrow to propagate error to client
  }
}),
addFavorite: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.restaurant.update({
        where: { id: input.id },
        data: { isFavorite: true },
      });
    }),
});

