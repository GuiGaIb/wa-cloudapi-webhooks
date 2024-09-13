import axios from 'axios';
import { env } from '../config/env.js';
export const retrieveMediaUrl = (mediaId) => axios.get(`${env.WHATSAPP_API_BASE_URL}/${mediaId}?phone_number_id=${env.WHATSAPP_PHONE_ID}`, {
    headers: {
        Authorization: `Bearer ${env.WHATSAPP_ACCESS_TOKEN}`,
    },
});
export const downloadMedia = (downloadUrl) => axios.get(downloadUrl, {
    headers: {
        Authorization: `Bearer ${env.WHATSAPP_ACCESS_TOKEN}`,
    },
});
export const downloadMediaById = async (mediaId) => {
    return retrieveMediaUrl(mediaId)
        .then(({ data }) => data)
        .then(async (data) => {
        const downloadResponse = await downloadMedia(data.url);
        const downloadMimeType = downloadResponse.headers['content-type'];
        if (downloadMimeType !== data.mime_type) {
            throw new Error(`Downloaded media content type mismatch. Expected: "${data.mime_type}", got: "${downloadMimeType}"`);
        }
        return { ...data, data: downloadResponse.data };
    });
};
