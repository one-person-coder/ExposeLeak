import { LabelHTMLAttributes, ReactNode } from "react";

interface InputProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string | undefined;
  children?: ReactNode;
}

function Label(props: InputProps) {
  const { children, className, ...rest } = props;
  return (
    <div className="mb-1">
      <label {...rest} className={`${className}`}>
        {children}
      </label>
    </div>
  );
}

export default Label;
