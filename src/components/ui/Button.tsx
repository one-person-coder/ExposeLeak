import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string | undefined;
  href?: string;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const { children, className, href, onClick } = props;
  const classes = `bg-secondary hover:bg-secondary-hover cursor-pointer px-2.5 text-lg text-white py-1.5 rounded-xl ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
