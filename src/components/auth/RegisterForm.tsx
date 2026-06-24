import { registerFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
    const {} = useForm({
        resolver: zodResolver(registerFormSchema),
        defaultValues:{

        }
    }) 
    return <form></form>
    
};

export default RegisterForm;