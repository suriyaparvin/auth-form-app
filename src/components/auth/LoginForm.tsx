"use client";

import { loginFormSchema, loginFormType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { handleSubmit } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const loginFormHandelar = async ({}: loginFormType) => {};

  return (
    <form
      onSubmit={handleSubmit(loginFormHandelar)}
      className=""
      noValidate></form>
  );
};

export default LoginForm;
