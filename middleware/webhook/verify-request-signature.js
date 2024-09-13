import crypto from 'crypto';
import { env } from '../../config/env.js';
function unicodeEscape(str) {
    return str.replace(/[^\x00-\x7F]/g, (char) => {
        return '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0');
    });
}
export const verifyRequestSignature = (req, res, next) => {
    const signature = req.headers['x-hub-signature-256'];
    if (!signature) {
        console.warn('No signature in request');
        if (env.REQUIRE_WEBHOOK_SIGNATURE_VERIFICATION === 'true') {
            return res.sendStatus(403);
        }
    }
    else {
        const elements = signature.split('=');
        const signatureHash = elements[1];
        const rawBody = unicodeEscape(JSON.stringify(req.body));
        const expectedHash = crypto
            .createHmac('sha256', env.META_APP_SECRET)
            .update(rawBody)
            .digest('hex');
        if (signatureHash !== expectedHash) {
            console.error('Invalid signature in request');
            if (env.REQUIRE_WEBHOOK_SIGNATURE_VERIFICATION === 'true') {
                return res.sendStatus(403);
            }
        }
    }
    next();
};
