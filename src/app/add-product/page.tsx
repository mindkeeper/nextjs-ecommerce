'use client';

import { useAddProduct } from './hooks/useAddProduct';
import { Button } from '@/components/ui/button';
import { InputItem } from '@/components/input';
import { Form } from '@/components/ui/form';
import React from 'react';

export default function ProductForm() {
  const { form, onSubmit, fields } = useAddProduct();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        {fields.map((field, idx) => (
          <InputItem key={idx} {...field} />
        ))}

        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
