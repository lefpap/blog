import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // TODO: This is for RSS feed need to replace with actual site name
  site: "https://example.com",
  integrations: [preact()]
});