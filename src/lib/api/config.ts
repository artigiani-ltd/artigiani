export class ApiConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiConfigurationError";
  }
}

export function getApiBaseUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!configuredUrl) {
    throw new ApiConfigurationError(
      "NEXT_PUBLIC_API_URL is missing. Copy .env.example to .env.local and configure the backend API base URL.",
    );
  }

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(configuredUrl);
  } catch {
    throw new ApiConfigurationError(
      "NEXT_PUBLIC_API_URL must be a valid absolute URL including the API base path.",
    );
  }

  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    throw new ApiConfigurationError(
      "NEXT_PUBLIC_API_URL must use the http or https protocol.",
    );
  }

  if (parsedUrl.username || parsedUrl.password) {
    throw new ApiConfigurationError(
      "NEXT_PUBLIC_API_URL must not contain credentials because it is public configuration.",
    );
  }

  return parsedUrl.toString().replace(/\/$/, "");
}

export function buildApiUrl(path: string): string {
  const relativePath = path.replace(/^\/+/, "");

  return `${getApiBaseUrl()}/${relativePath}`;
}
