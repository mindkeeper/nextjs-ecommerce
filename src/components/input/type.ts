'use client';
import { InputHTMLAttributes } from 'react';

type InputType = 'text' | 'number';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  name: string;
  placeholder?: string;
  label?: string;
  description?: string;
}
