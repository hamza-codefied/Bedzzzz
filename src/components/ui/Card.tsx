import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hoverable }) => {
  return (
    <div
      className={cn(
        'bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300',
        hoverable && 'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
