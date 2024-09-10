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

export const downloadMediaByMediaId = async (mediaId: string) => {
  const response = await retrieveMediaUrl(mediaId);
  const downloadUrl = response.data.url;
  const downloadResponse = await downloadMedia(downloadUrl);
  return downloadResponse;
};

export type RetrieveMediaResponseData = {
  messaging_product: 'whatsapp';
  url: string;
  mime_type: string;
  sha256: string;
  file_size: string;
  id: string;
};
