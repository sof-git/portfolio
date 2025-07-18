import { NuxtConfig } from '@nuxt/schema';

declare module '@nuxt/schema' {
  interface NuxtConfig {
    router?: {
      base?: string;
      // autres propriétés du routeur
    };
  }
}