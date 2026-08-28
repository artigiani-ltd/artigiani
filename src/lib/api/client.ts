import { buildApiUrl } from "./config";

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = "ApiError";
  }
}

export async function apiRequest<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const url = buildApiUrl(path);
  const headers = new Headers(init.headers);

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  let response: Response;

  try {
    response = await fetch(url, { ...init, headers });
  } catch (cause) {
    throw new ApiError("Unable to reach the backend API.", undefined, {
      cause,
    });
  }

  if (!response.ok) {
    throw new ApiError(
      `The backend API request failed with status ${response.status}.`,
      response.status,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  try {
    return (await response.json()) as T;
  } catch (cause) {
    throw new ApiError(
      "The backend API returned an unexpected response.",
      response.status,
      { cause },
    );
  }
}
