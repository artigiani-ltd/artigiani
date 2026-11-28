import type { MetadataRoute } from "next";
import { isIndexable } from "./constants/indexing";
import { siteUrl } from "./constants/site-url";
import { designs } from "./constants/designs";

export default function sitemap(): MetadataRoute.Sitemap {
  return isIndexable
    ? [
        { url: siteUrl.href },
        { url: new URL("/about", siteUrl).href },
        ...designs.map(({ slug }) => ({
          url: new URL(`/designs/${slug}`, siteUrl).href,
        })),
      ]
    : [];
}
