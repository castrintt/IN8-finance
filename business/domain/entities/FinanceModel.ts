import { z } from "zod";

export const FinanceModelSchema = z.object({
  Id: z.string(),
  Name: z.string(),
  CreatedAt: z.date(),
  UpdatedAt: z.date(),
  DeletedAt: z.date().nullable(),
  Value: z.number(),
  Category: z.string().nullable(),
  Observation: z.string().nullable(),
});

export type FinanceModel = z.infer<typeof FinanceModelSchema>;
