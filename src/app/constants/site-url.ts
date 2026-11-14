function getSiteUrl(): URL {
  const configuredUrl = process.env.SITE_URL ?? "https://artigiani.design";

  const url = new URL(configuredUrl);
  if (
    !["https:", "http:"].includes(url.protocol) ||
    url.username ||
    url.password
  ) {
    throw new Error(
      "SITE_URL must be an absolute HTTP or HTTPS URL without credentials.",
    );
  }
  if (url.pathname !== "/" || url.search || url.hash) {
    throw new Error("SITE_URL must contain only the website origin.");
  }
  return url;
}

export const siteUrl = getSiteUrl();
