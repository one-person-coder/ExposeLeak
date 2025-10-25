import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string | undefined;
}

function Input(props: InputProps) {
  const { className, ...rest } = props;
  return <input {...rest} className={`input ${className}`} />;
}

export default Input;
