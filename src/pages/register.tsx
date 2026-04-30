import { useForm } from "react-hook-form";
import { useRegister } from "../hooks/use-auth";

<<<<<<< HEAD
import { registerSchema } from "../schema/auth-schema";
import type { RegisterFormInputs } from "../schema/auth-schema";
<<<<<<< HEAD
import { registerUser, verifyOtp, resendOtp } from "../api/auth-api";
import { useAuthStore } from "../store/auth-store";
=======
// import { registerUser, verifyOtp, resendOtp } from "../api/auth-api";
import { useAuthStore } from "../store/user-store";
>>>>>>> cb3e55f (final commit)
import OtpInput from "../components/otp-input";
import "../assets/css/register.css"
=======
const RegisterPage = () => {
    const { mutate } = useRegister();
>>>>>>> c878c0b (added vendor services, auth store, updated types, removed unused stores)

    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        mutate(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="Name" />
            <input {...register("phone")} placeholder="Phone" />
            <input {...register("email")} placeholder="Email" />
            <button>Register</button>
        </form>
    );
};

export default RegisterPage;