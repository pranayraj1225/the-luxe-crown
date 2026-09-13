import { LucideIcon } from 'lucide-react';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  href?: string;
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  href,
  as,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-sans uppercase tracking-[0.1em] text-xs font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-brand-charcoal text-brand-ivory hover:bg-brand-charcoal/80",
    secondary: "bg-brand-gold text-brand-ivory hover:bg-brand-gold-muted",
    outline: "border border-brand-charcoal/30 text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-ivory hover:border-brand-charcoal",
    ghost: "text-brand-charcoal hover:text-brand-gold"
  };
  
  const sizes = {
    sm: "px-4 py-3",
    md: "px-8 py-4",
    lg: "px-10 py-5 text-sm"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2" />}
    </>
  );

  if (href) {
    const Tag = as || 'a';
    return (
      <Tag href={href} className={classes} {...props}>
        {content}
      </Tag>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
