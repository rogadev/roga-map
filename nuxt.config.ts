// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-mapbox"],
  mapbox: {
    accessToken: process.env.MAPBOX_ACCESS_TOKEN,
  }
});