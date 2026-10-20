import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://mushroomkick.com', trailingSlash: 'ignore', integrations: [sitemap()] });
