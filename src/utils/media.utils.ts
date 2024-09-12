import axios from 'axios';

import { env } from '../config/env';

export const retrieveMediaUrl = (mediaId: string) =>
  axios.get<RetrieveMediaResponseData>(
    `${env.WHATSAPP_API_BASE_URL}/${mediaId}?phone_number_id=${env.WHATSAPP_PHONE_ID}`,
    {
      headers: {
        Authorization: `Bearer ${env.WHATSAPP_ACCESS_TOKEN}`,
      },
    }
  );

export const downloadMedia = (downloadUrl: string) =>
  axios.get(downloadUrl, {
    headers: {
      Authorization: `Bearer ${env.WHATSAPP_ACCESS_TOKEN}`,
    },
  });

export const downloadMediaById = async (mediaId: string) => {
  return retrieveMediaUrl(mediaId)
    .then(({ data }) => data)
    .then(async (data) => {
      const downloadResponse = await downloadMedia(data.url);
      const downloadMimeType = downloadResponse.headers['content-type'];
      if (downloadMimeType !== data.mime_type) {
        throw new Error(
          `Downloaded media content type mismatch. Expected: "${data.mime_type}", got: "${downloadMimeType}"`
        );
      }
      return { ...data, data: downloadResponse.data };
    });
};

export type RetrieveMediaResponseData = {
  messaging_product: 'whatsapp';
  url: string;
  mime_type: string;
  sha256: string;
  file_size: string;
  id: string;
};
