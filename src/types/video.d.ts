import { z } from "zod";

export interface Video {
  id: string;
  src: string | null;
  poster: string | null;
  prompt: string | null;
  avatar: string | null;
  author: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export const VideoParam = {
  src: z.string(),
  poster: z.string(),
  prompt: z.string(),
  avatar: z.string(),
  author: z.string(),
};
