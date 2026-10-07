import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      href,
      onClick,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider transition-all duration-300 rounded-full";

    const variants = {
      primary:
        "bg-gym-orange text-gym-bg hover:bg-gym-orange-light hover:shadow-lg hover:shadow-gym-orange/25",
      secondary:
        "bg-white/5 text-white border border-gym-border hover:bg-white/10 hover:border-white/30",
      outline:
        "bg-transparent text-gym-orange border-2 border-gym-orange hover:bg-gym-orange hover:text-gym-bg",
      ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
      xl: "px-10 py-5 text-lg",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} onClick={onClick} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
