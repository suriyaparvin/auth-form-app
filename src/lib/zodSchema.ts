import z from "zod";

export const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(3,"you have to enter more than 3 character").max(8,"you have only 8 character space"),
});

export type loginFormType = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z.object({
  name: z.string(),
  email: z.email({error:"invalid error"}),
  password: z.string()
});

export type registerFormType = z.infer<typeof registerFormSchema>;
