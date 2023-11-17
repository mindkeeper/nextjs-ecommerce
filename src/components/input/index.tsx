'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { InputProps } from './type';
import { useFormContext } from 'react-hook-form';
export const InputItem: React.FC<InputProps> = ({
  type,
  name,
  label,
  placeholder,
  description,
  ...rest
}: InputProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {!label ? null : <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              {...{ ...rest, ...field }}
            />
          </FormControl>
          {!description ? null : (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
