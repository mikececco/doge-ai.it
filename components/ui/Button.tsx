"use client";

import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary";
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
  href,
  external,
  children,
  type = "button",
  disabled,
  onClick,
  className: extraClass,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-giallo text-nero px-5 py-2.5 hover:bg-giallo-hover active:scale-[0.98]",
    secondary:
      "text-nero hover:text-giallo-hover group",
  };

  const cls = [base, variants[variant], extraClass].filter(Boolean).join(" ");

  const arrow = variant === "secondary" && (
    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
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
