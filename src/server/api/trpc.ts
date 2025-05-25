// api/trpc.ts
import { initTRPC } from '@trpc/server';
import { prisma } from '../db';

export const createContext = () => ({ prisma });
type Context = ReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
