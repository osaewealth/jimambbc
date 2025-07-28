import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  icon
}) => {
  const baseClasses = 'font-semibold transition-all duration-200 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg'
  };

  const variantClasses = {
    primary: 'bg-[#650909] hover:bg-[#4b1313] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1',
    secondary: 'bg-[#4b1313] hover:bg-[#650909] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1',
    outline: 'bg-white border-2 border-[#650909] text-[#650909] hover:bg-[#650909] hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1',
    ghost: 'bg-transparent text-[#650909] hover:bg-[#650909] hover:text-white'
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button; 