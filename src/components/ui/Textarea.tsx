import { TextareaHTMLAttributes } from "react";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string | undefined;
}

function Textarea(props: InputProps) {
  const { className, ...rest } = props;
  return <textarea {...rest} className={`input ${className || ""}`} />;
}

export default Textarea;
