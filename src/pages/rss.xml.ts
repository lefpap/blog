import type { APIContext } from "astro";
import rss, { pagesGlobToRssItems, type RSSFeedItem } from "@astrojs/rss";

export async function GET(context: APIContext) {
  const site = context.site ?? ""; // Add this line to handle undefined value
  const items = (await pagesGlobToRssItems(
    import.meta.glob("./**/*.md")
  )) as RSSFeedItem[];
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: site, // Use the updated site value
    items: items,
    customData: `<language>en-us</language>`,
  });
}
