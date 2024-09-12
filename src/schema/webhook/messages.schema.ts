import { z } from 'zod';

export const SUPPORTD_MESSAGE_TYPES = ['audio', 'image', 'text'] as const;
export const SUPPORTED_MIME_TYPES = {
  audio: ['audio/aac', 'audio/amr', 'audio/mpeg', 'audio/mp4', 'audio/ogg'],
  image: ['image/jpeg', 'image/png'],
  text: [],
} as const;

export const messageErrorSchema = z.object({
  code: z.number().int(),
  title: z.string().trim(),
  message: z.string().trim(),
  error_data: z.object({
    details: z.string().trim(),
  }),
});

export const baseMessageSchema = z.object({
  errors: z.array(messageErrorSchema).default([]),
  from: z.string().trim(),
  id: z.string().trim(),
  timestamp: z
    .string()
    .trim()
    .refine((str) => {
      const num = Number(str);
      return !isNaN(num) && num > 0 && Number.isInteger(num);
    }, 'timestamp must be a positive integer number')
    .transform((str) => new Date(Number(str) * 1000)),
});

export const audioMessageSchema = baseMessageSchema.merge(
  z.object({
    type: z.literal('audio'),
    audio: z.object({
      id: z.string().trim(),
      mime_type: z
        .string()
        .trim()
        // @ts-ignore - ignore readonly string assertion
        .refine(
          (str) =>
            SUPPORTED_MIME_TYPES.audio.some((type) =>
              new RegExp(type).test(str)
            ),
          (str) =>
            `mime_type must be one of ${SUPPORTED_MIME_TYPES.audio.join(
              ', '
            )}. Received: "${str}"`
        ),
    }),
    // context: z.object({}),
  })
);

export const textMessageSchema = baseMessageSchema.merge(
  z.object({
    type: z.literal('text'),
    text: z.object({
      body: z.string().trim(),
    }),
  })
);

export const imageMessageSchema = baseMessageSchema.merge(
  z.object({
    type: z.literal('image'),
    image: z.object({
      id: z.string().trim(),
      mime_type: z.enum(SUPPORTED_MIME_TYPES.image),
      caption: z.string().trim().optional(),
      sha256: z.string().trim(),
    }),
  })
);

export const messageSchema = z.discriminatedUnion('type', [
  audioMessageSchema,
  imageMessageSchema,
  textMessageSchema,
]);

export type Message = z.infer<typeof messageSchema>;
export type AudioMessage = z.infer<typeof audioMessageSchema>;
export type ImageMessage = z.infer<typeof imageMessageSchema>;
export type TextMessage = z.infer<typeof textMessageSchema>;
export type SupportedMessageType = (typeof SUPPORTD_MESSAGE_TYPES)[number];
