# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page Nuxt 3 app that renders an interactive Mapbox 3D map centered on the user's
geolocation (falling back to a hardcoded coordinate). It is a "restore Google's discontinued 3D
terrain view" tool — the entire UI is `app.vue`; there are no pages, components, or API routes yet.

## Commands

Package manager is **pnpm** (the repo has `pnpm-lock.yaml`; the README's `npm i` is stale).

- `pnpm install` — install deps (`postinstall` runs `nuxt prepare` to generate `.nuxt/` types)
- `pnpm dev` — dev server at http://localhost:3000
- `pnpm build` — production build (Nitro server output in `.output/`)
- `pnpm generate` — static prerender
- `pnpm preview` — serve the build locally

There is **no linter, no test suite, and no typecheck script**. `nuxt prepare` (via `postinstall`)
is what regenerates `.nuxt/tsconfig.json`, which the root and `server/` tsconfigs extend — run it
if type resolution looks broken after a fresh checkout.

## Architecture

- **Nuxt 3** with two modules registered in `nuxt.config.ts`: `@nuxtjs/tailwindcss` (styling; no
  `tailwind.config` file — defaults only) and `nuxt-mapbox` (wraps mapbox-gl and provides the
  `<MapboxMap>` auto-imported component).
- **Mapbox token**: `nuxt.config.ts` reads `process.env.MAPBOX_ACCESS_TOKEN` and passes it to the
  `mapbox` module config. Note: `.env.example` correctly names this `MAPBOX_ACCESS_TOKEN`, but the
  README's install steps say `MAPBOX_API_KEY` — the config variable is the authoritative one.
- **`app.vue`** is the whole app: on mount it calls `navigator.geolocation.getCurrentPosition` and
  feeds the result into the `<MapboxMap>` `center` option. The map uses a custom Mapbox Studio style
  (`mapbox://styles/ryanroga/...`) hardcoded in the template.
- **`server/`** exists (with its own tsconfig for Nitro) but is currently empty of routes.

## Conventions

- The map style ID and the geolocation fallback coordinate are hardcoded in `app.vue`; change them
  there, not via config.
- Never commit `.env` — only `.env.example` is tracked (enforced by `.gitignore`).
