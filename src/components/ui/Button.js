"use client";

import React from "react";
import Link from "next/link";

/**
 * Enterprise production-level, theme-aware Button component.
 * Features variants: gradient, primary, secondary, text.
 * Handles Next.js routing automatically if `href` is supplied.
 */
export function Button({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "end",
  loading = false,
  disabled = false,
  type = "button",
  className = "",
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-headline font-bold transition-all duration-200 select-none scale-100 active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";
  
  const sizes = {
    sm: "px-4 py-2 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-lg gap-2",
    lg: "px-6 py-3 text-base rounded-xl gap-2.5",
  };

  const variants = {
    primary: "bg-primary-container text-on-primary-container shadow-[0_4px_16px_rgba(0,209,255,0.15)] hover:shadow-[0_4px_24px_rgba(0,209,255,0.25)] hover:brightness-105",
    gradient: "bg-gradient-to-r from-[#00d1ff] to-[#7000ff] text-white shadow-[0_4px_20px_rgba(0,209,255,0.2)] hover:shadow-[0_4px_24px_rgba(112,0,255,0.3)] hover:brightness-110",
    secondary: "glass-card border border-outline-variant/30 text-on-surface hover:bg-surface-variant/20 hover:border-outline-variant/60",
    text: "bg-transparent text-on-surface-variant hover:text-[#00d1ff] p-0 active:scale-100",
  };

  const spinner = (
    <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  const classes = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  const renderContent = () => (
    <>
      {loading && spinner}
      {!loading && icon && iconPosition === "start" && icon}
      <span>{children}</span>
      {!loading && icon && iconPosition === "end" && icon}
    </>
  );

  if (href && !disabled) {
    const computedTitle = props.title || (typeof children === "string" ? children : undefined);
    return (
      <Link href={href} className={classes} title={computedTitle} prefetch={false} {...props}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {renderContent()}
    </button>
  );
}

export default Button;
