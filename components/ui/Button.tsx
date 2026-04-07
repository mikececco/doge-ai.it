"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  uppercase?: boolean;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  variant = "primary",
  size = "sm",
  uppercase,
  href,
  external,
  children,
  type = "button",
  disabled,
  onClick,
  className: extraClass,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-giallo text-nero hover:bg-giallo-hover active:scale-[0.98]",
    secondary:
      "text-nero hover:text-giallo-hover group",
    dark:
      "bg-nero text-bianco hover:bg-giallo hover:text-nero",
    outline:
      "border-[2px] border-nero text-nero hover:bg-nero hover:text-bianco",
  };

  const sizes = {
    sm: "px-5 py-1.5",
    md: "px-6 py-2",
    lg: "px-8 py-3 text-base",
  };

  const sizeClass = variant === "secondary" ? "" : sizes[size];
  const uppercaseClass = uppercase ? "uppercase tracking-wider" : "";

  const cls = [base, variants[variant], sizeClass, uppercaseClass, extraClass]
    .filter(Boolean)
    .join(" ");

  const arrow = variant === "secondary" && (
    <ArrowRight
      size={16}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {arrow}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
        {arrow}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${cls} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
      {arrow}
    </button>
  );
}
