import { createTRPCRouter } from "@/server/api/trpc";
import { timestampRouter } from "./routers/timestamp";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  timestamp: timestampRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
