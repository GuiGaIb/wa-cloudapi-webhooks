export const REQUIRED_ENV_VARS = [
  'WHATSAPP_ACCESS_TOKEN',
  'WHATSAPP_PHONE_ID',
  'META_WEBHOOK_VERIFY_TOKEN',
  'META_APP_SECRET',
] as const;

export const OPTIONAL_ENV_VARS = [
  'REQUIRE_WEBHOOK_SIGNATURE_VERIFICATION',
  'WHATSAPP_API_BASE_URL',
] as const;
const optionalEnvVarsDefaults: { [key in OptionalEnvVar]: string } = {
  REQUIRE_WEBHOOK_SIGNATURE_VERIFICATION: 'true',
  WHATSAPP_API_BASE_URL: 'https://graph.facebook.com/v20.0',
};

export const env = {
  ...REQUIRED_ENV_VARS.reduce<{
    [key in RequiredEnvVar]: string;
  }>((acc, key) => {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Environment variable "${key}" is required`);
    }
    acc[key] = value;
    return acc;
  }, {} as any),
  ...OPTIONAL_ENV_VARS.reduce<{
    [key in (typeof OPTIONAL_ENV_VARS)[number]]: string;
  }>((acc, key) => {
    let value = process.env[key];
    if (!value) {
      value = optionalEnvVarsDefaults[key];
      console.warn(
        `Environment variable "${key}" is not set. Using default value: "${optionalEnvVarsDefaults[key]}"`
      );
    }
    acc[key] = value;
    return acc;
  }, {} as any),
};

export type RequiredEnvVar = (typeof REQUIRED_ENV_VARS)[number];
export type OptionalEnvVar = (typeof OPTIONAL_ENV_VARS)[number];
