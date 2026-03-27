import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, onClick, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<{ x: number; y: number; id: number }[]>([]);

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

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple = { x, y, id: Date.now() };
      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 500);

      if (onClick) onClick(e);
    };

    return (
      <motion.button
        ref={ref as any}
        whileTap={{ scale: 0.96 }}
        onClick={handleClick}
        className={cn(
          "relative inline-flex items-center justify-center rounded-xl transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none overflow-hidden",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute bg-white/30 rounded-full pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 50,
                height: 50,
                marginLeft: -25,
                marginTop: -25,
              }}
            />
          ))}
        </AnimatePresence>
        <motion.span className="relative z-10 flex items-center justify-center">
          {children}
        </motion.span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
