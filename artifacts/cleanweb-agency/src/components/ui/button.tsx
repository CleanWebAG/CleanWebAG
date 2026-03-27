import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-electric text-white shadow-lg shadow-electric/25 hover:bg-electric-hover hover:shadow-xl hover:shadow-electric/30 hover:-translate-y-0.5",
      secondary: "bg-white text-navy-950 shadow-md hover:bg-gray-50 hover:-translate-y-0.5",
      outline: "border-2 border-electric text-electric hover:bg-electric/10",
      ghost: "text-white/80 hover:text-white hover:bg-white/10",
      glass: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:-translate-y-0.5"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base font-medium",
      lg: "h-14 px-8 text-lg font-semibold",
      icon: "h-10 w-10 justify-center",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl transition-all duration-300 ease-out active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
