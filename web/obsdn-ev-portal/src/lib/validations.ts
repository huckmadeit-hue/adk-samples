import { z } from 'zod';

export const applicationSchema = z.object({
  full_name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, 'Valid phone number required'),
  uber_rating: z.number().min(4.85, 'Minimum 4.85 rating required').max(5.0),
  lifetime_trips: z.number().int().min(1500, 'Minimum 1,500 trips required'),
  has_parking: z.boolean(),
  has_home_charging: z.boolean(),
  deposit_committed: z.literal(true, { errorMap: () => ({ message: 'You must acknowledge the deposit requirement' }) }),
  source: z.string().optional(),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactInput = z.infer<typeof contactSchema>;
