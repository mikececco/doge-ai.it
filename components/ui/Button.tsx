"use client";

import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  variant = "primary",
  href,
  children,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-giallo text-nero px-5 py-2.5 rounded-button hover:bg-giallo-hover active:scale-[0.98]",
    secondary:
      "text-nero hover:text-giallo-hover group",
  };

  const className = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
        {variant === "secondary" && (
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        )}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
      {variant === "secondary" && (
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </button>
  );
}
