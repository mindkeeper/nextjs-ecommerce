import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { InputProps } from '@/components/input/type';
import prisma from '@/lib/db/db';

export const formSchema = z.object({
  productName: z
    .string({ required_error: 'Product Name is Required' })
    .min(4, 'min 4 character'),
  description: z
    .string({ required_error: 'Product Description is Required' })
    .min(10, 'minimum lengh : 10'),
  imageUrl: z
    .string({ required_error: 'Image URL is Required' })
    .url('Invalid URL format'),
  price: z.coerce
    .number({ required_error: 'Product Price is Required' })
    .min(100, 'Minimum Price is 100'),
});

export function useAddProduct() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: '',
      imageUrl: '',
      description: '',
      price: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await prisma.product.create({
      data: { ...values },
    });
  };
  const fields: InputProps[] = [
    {
      name: 'productName',
      label: 'Product Name',
      type: 'text',
      placeholder: 'Product Name',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      placeholder: 'Description',
    },
    {
      name: 'imageUrl',
      label: 'Image URL',
      type: 'text',
      placeholder: 'Image URL',
    },
    {
      name: 'price',
      label: 'Price',
      type: 'number',
      placeholder: 'Price',
      min: 0,
    },
  ];

  return { form, onSubmit, fields };
}
