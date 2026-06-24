"use client"

import { loginFormSchema, loginFormType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const LoginForm = () => {
    const {control,handleSubmit} = useForm({
         resolver: zodResolver (loginFormSchema),
         defaultValues : {
            email :"",
            password :"",
         },
         mode : "all",
    })
    const loginFormHandeler = async ({email,password}:loginFormType) => {
        console.log(email,password);
        
    }
   
    return (
    <form onSubmit={handleSubmit(loginFormHandeler)}
      className="grid gap-4"
      noValidate>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
      <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}> Email </FieldLabel>
      <Input 
        {...field} 
        id={field.name}
        type="text" 
        placeholder="Enter your Email.."
        aria-invalid={fieldState.invalid} 
        />
        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
      </Field>
    )}
/>

 <Controller
  name="password"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
      <Input 
        {...field} 
        id={field.name}
        type="password" 
        placeholder="Enter your password.."
        aria-invalid={fieldState.invalid} 
        />
        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<button type="submit" className="bg-destructive">Submit</button>
</form>
    )
   
};

export default LoginForm;