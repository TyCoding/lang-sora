import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { VideoParam } from "@/types/video.d";

export const videoRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object(VideoParam))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.video.create({
        data: input,
      });
    }),

  getVideoList: publicProcedure.query(({ ctx, input }) => {
    return ctx.db.video.findMany({
      where: { src: input },
    });
  }),

  getVideo: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.video.findUnique({
      where: { id: input },
    });
  }),
});
