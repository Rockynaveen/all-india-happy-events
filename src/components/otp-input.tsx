import React from "react";

type Props = {
  otp: string[];
  setOtp: (otp: string[]) => void;
};

const OtpInput: React.FC<Props> = ({ otp, setOtp }) => {

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      {otp.map((digit, i) => (
        <input
          key={i}
          id={`otp-${i}`}
          value={digit}
          onChange={(e) => handleChange(e.target.value, i)}
          maxLength={1}
          style={{
            width: "40px",
            height: "45px",
            textAlign: "center",
            fontSize: "18px"
          }}
        />
      ))}
    </div>
  );
};

export default OtpInput;