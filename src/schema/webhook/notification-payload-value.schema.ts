import { z } from 'zod';

import { messageSchema } from './messages.schema.js';

export const valueContactSchema = z.object({
  wa_id: z.string().trim(),
  user_id: z.string().trim(),
  profile: z.object({
    name: z.string().trim(),
  }),
});

export const valueErrorSchema = z.object({
  code: z.number().int(),
  title: z.string().trim(),
  message: z.string().trim(),
  error_data: z.object({
    details: z.string().trim(),
  }),
});

export const valueMetadataSchema = z.object({
  display_phone_number: z.string().trim(),
  phone_number_id: z.string().trim(),
});

export const valueSchema = z.object({
  contacts: z.array(valueContactSchema),
  errors: z.array(valueErrorSchema),
  messages: z.array(messageSchema),
  metadata: valueMetadataSchema,
  // statuses: z.array(),
});

export type ChangeValue = z.infer<typeof valueSchema>;
export type ValueContact = z.infer<typeof valueContactSchema>;
export type ValueError = z.infer<typeof valueErrorSchema>;
export type ValueMetadata = z.infer<typeof valueMetadataSchema>;
