import { z } from "zod";

export const AuthModelSchema = z.object({
  Name: z.string(),
  Password: z.string(),
});

export type AuthModel = z.infer<typeof AuthModelSchema>;
