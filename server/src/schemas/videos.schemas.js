import { z } from "zod";

export const createVideoSchema = z.object({
  categoria: z.string().max(100),
  titulo: z.string().max(150),
  descripcion: z.string().max(500),
  url: z.string().url().max(200),
  id_yt: z.string().max(150).optional(),
  color: z.string().max(100),
  imagen: z.string().max(150).optional(),
});

export const updateVideoSchema = z.object({
  categoria: z.string().max(100).optional(),
  titulo: z.string().max(150).optional(),
  descripcion: z.string().max(500).optional(),
  url: z.string().url().max(200),
  id_yt: z.string().max(150).optional().or(z.null()),
  color: z.string().max(100),
  imagen: z.string().max(150).optional().or(z.null()),
});
