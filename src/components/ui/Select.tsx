import { ChevronDown } from "lucide-react";
import { ReactNode, SelectHTMLAttributes } from "react";

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string | undefined;
  children?: ReactNode;
}

function Select(props: InputProps) {
  const { className, children, ...rest } = props;
  return (
    <div className="relative">
      <select {...rest} className={`input appearance-none  ${className}`}>
        {children}
      </select>
      <ChevronDown className="absolute y-center right-3" />
    </div>
  );
}

export default Select;
