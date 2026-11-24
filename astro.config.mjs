// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arres.com.tr',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ru', 'ar', 'fa'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: {
          tr: 'tr',
          en: 'en',
          ru: 'ru',
          ar: 'ar',
          fa: 'fa',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});