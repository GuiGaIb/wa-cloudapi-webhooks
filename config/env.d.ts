export declare const REQUIRED_ENV_VARS: readonly ["WHATSAPP_ACCESS_TOKEN", "WHATSAPP_PHONE_ID", "META_WEBHOOK_VERIFY_TOKEN", "META_APP_SECRET"];
export declare const OPTIONAL_ENV_VARS: readonly ["REQUIRE_WEBHOOK_SIGNATURE_VERIFICATION", "WHATSAPP_API_BASE_URL"];
export declare const env: {
    REQUIRE_WEBHOOK_SIGNATURE_VERIFICATION: string;
    WHATSAPP_API_BASE_URL: string;
    WHATSAPP_ACCESS_TOKEN: string;
    WHATSAPP_PHONE_ID: string;
    META_WEBHOOK_VERIFY_TOKEN: string;
    META_APP_SECRET: string;
};
export type RequiredEnvVar = (typeof REQUIRED_ENV_VARS)[number];
export type OptionalEnvVar = (typeof OPTIONAL_ENV_VARS)[number];
