
import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '@/server/api/routers/_app';
import { createContext } from '@/server/api/trpc';


const handler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});

export default async function corsHandler(req: trpcNext.NextApiRequest, res: trpcNext.NextApiResponse<any>) {
  // Set CORS headers - adjust origin for production
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    // Handle CORS preflight
    res.status(200).end();
    return;
  }

  // Call original tRPC handler
  return handler(req, res);
}
