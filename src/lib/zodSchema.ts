import z from "zod";

export const loginFormSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type loginFormType = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});

export type registerFormType = z.infer<typeof registerFormSchema>;
