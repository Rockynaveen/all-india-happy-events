import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useVerifyOtp } from "../hooks/use-auth";

const VerifyOtpPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { mutate } = useVerifyOtp();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    mutate(
      {
        phone: state.phone,
        otp: data.otp,
      },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("otp")} placeholder="Enter OTP" />
      <button>Verify</button>
    </form>
  );
};

export default VerifyOtpPage;