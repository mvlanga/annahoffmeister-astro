import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify({
    imageCDN: false
  }),
  image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.ctfassets.net',
    }],
  },
});
