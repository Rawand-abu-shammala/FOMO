'use client';
import { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div
      className={
        `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`
      }
      {...props}
    >
      {children}
    </div>
  );
}
