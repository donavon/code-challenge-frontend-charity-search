import { z } from 'zod';

export const CharityListSchema = z.object({
  id: z.string().uuid(),
  logo: z.string().url('Provide a valid URL'),
  name: z.string(),
  city: z.string(),
  state: z.string(),
});
export type CharityList = z.infer<typeof CharityListSchema>;

export const CharitySchema = CharityListSchema.extend({
  mission: z.string(),
  about: z.string(),
  website: z.string().url('Provide a valid URL'),
  ein: z.string().regex(/^\d{9}$/), // EANs are stored unformatted (no dash) in the database
});
export type Charity = z.infer<typeof CharitySchema>;

export const NewCharitySchema = CharitySchema.omit({ id: true }).extend({
  ein: z
    .string()
    .regex(/^\d{2}-\d{7}$/, 'Provide a 9 digit EIN in the format XX-XXXXXXX'), // validate that the user has entered a valid EIN with the dash
});
export type NewCharity = Partial<z.infer<typeof CharitySchema>>;

export type NewCharityErrors = {
  general?: string;
} & NewCharity;
