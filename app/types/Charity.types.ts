import { z } from 'zod';

const invalidUrlMessage = 'Provide a valid URL';

const UrlSchema = z
  .string({ required_error: invalidUrlMessage })
  .url(invalidUrlMessage);

export const CharityListSchema = z.object({
  id: z.string().uuid(),
  logo: UrlSchema,
  name: z.string(),
  city: z.string(),
  state: z.string(),
});
export type CharityList = z.infer<typeof CharityListSchema>;

export const CharitySchema = CharityListSchema.extend({
  mission: z.string(),
  about: z.string(),
  website: UrlSchema,
  ein: z.string().regex(/^\d{9}$/), // EANs are stored unformatted (no dash) in the database
});
export type Charity = z.infer<typeof CharitySchema>;

const invalidEanMessage = 'Format XX-XXXXXXX';
export const NewCharitySchema = CharitySchema.omit({ id: true }).extend({
  ein: z
    .string({ required_error: invalidEanMessage })
    .regex(/^\d{2}-\d{7}$/, invalidEanMessage), // validate that the user has entered a valid EIN with the dash
});
export type NewCharity = Partial<z.infer<typeof CharitySchema>>;

export type NewCharityErrors = {
  general?: string;
} & NewCharity;
