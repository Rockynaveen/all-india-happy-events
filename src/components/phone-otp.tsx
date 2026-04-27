type Props = {
  register: any;
  error?: string;
};
const PhoneInput = ({ register, error }: Props) => {
  return (
    <div>
      <input type="tel" maxLength={10} className="form-control mb-3"  {...register("phone")}/>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
export default PhoneInput;