import { z } from "zod";

export const createCategoriaSchema = z.object({
  categoria: z.string().max(100),
  color: z.string().max(100),
});

export const updateCategoriaSchema = z.object({
  categoria: z.string().max(100).optional(),
  color: z.string().max(100),
});
