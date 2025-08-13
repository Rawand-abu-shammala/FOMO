// Inputs.tsx
import React from 'react';
import { Input } from '@/components/ui/input';

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  name: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  name,
  value,
  onChange,
  className,
  placeholder,
  ...rest
}) => {
  return (
    <Input
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      className={className}
      {...rest}
    />
  );
};




