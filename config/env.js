export const REQUIRED_ENV_VARS = [
    'WHATSAPP_ACCESS_TOKEN',
    'WHATSAPP_PHONE_ID',
    'META_WEBHOOK_VERIFY_TOKEN',
    'META_APP_SECRET',
];
export const OPTIONAL_ENV_VARS = [
    'REQUIRE_WEBHOOK_SIGNATURE_VERIFICATION',
    'WHATSAPP_API_BASE_URL',
];
const optionalEnvVarsDefaults = {
    REQUIRE_WEBHOOK_SIGNATURE_VERIFICATION: 'true',
    WHATSAPP_API_BASE_URL: 'https://graph.facebook.com/v20.0',
};
export const env = {
    ...REQUIRED_ENV_VARS.reduce((acc, key) => {
        const value = process.env[key];
        if (!value) {
            throw new Error(`Environment variable "${key}" is required`);
        }
        acc[key] = value;
        return acc;
    }, {}),
    ...OPTIONAL_ENV_VARS.reduce((acc, key) => {
        let value = process.env[key];
        if (!value) {
            value = optionalEnvVarsDefaults[key];
            console.warn(`Environment variable "${key}" is not set. Using default value: "${optionalEnvVarsDefaults[key]}"`);
        }
        acc[key] = value;
        return acc;
    }, {}),
};
