import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const timestampRouter = createTRPCRouter({
  listByMonth: publicProcedure
    .input(z.object({ month: z.string().min(1) }))
    .query(({ ctx }) => {
      return ctx.db.timestamp.findMany({
        orderBy: {
          date: 'desc'
        },
        where: {
        }
      })
    }),

  create: publicProcedure
    .input(z.object({ date: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.timestamp.create({
        data: {
          date: input.date,
          userId: 'user-id'
        }
      })
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.timestamp.delete({
        where: {
          id: input.id
        }
      })
    }),
})