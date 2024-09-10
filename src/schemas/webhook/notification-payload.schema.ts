import { z } from 'zod';
import { valueSchema } from './notification-payload-value.schema';

export const changeSchema = z.object({
  value: valueSchema,
  field: z.literal('messages'),
});

export const entrySchema = z.object({
  id: z.string().trim(),
  changes: z.array(changeSchema),
});

export const notificationPayloadSchema = z.object({
  object: z.literal('whatsapp_business_account'),
  entry: z.array(entrySchema),
});

export type NotificationPayload = z.infer<typeof notificationPayloadSchema>;
export type PayloadEntry = z.infer<typeof entrySchema>;
export type EntryChange = z.infer<typeof changeSchema>;
