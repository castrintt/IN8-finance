import { FinanceModelSchema } from "./FinanceModel";
import { z } from "zod";

const UserModelSchema = z.object({
  Name: z.string(),
  Password: z.string(),
  Finances: z.array(FinanceModelSchema),
});

export type UserModel = z.infer<typeof UserModelSchema>;
