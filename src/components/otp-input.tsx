export const OtpInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter OTP"
      maxLength={6}
      className="border p-2 w-full text-center tracking-widest"
    />
  );
};