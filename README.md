# Simple Mapbox 3D Map

## Introduction

In recent years, the discontinuation of Google's 3D terrain and housing views left a void for users who relied on these features for detailed geographic visualization. **Simple Mapbox 3D Map** is a straightforward solution built with Nuxt 3 and the Mapbox API, aimed at restoring the ability to explore 3D maps with ease.

## Features

- **Interactive 3D Terrain and Structures**: Navigate through a 3D landscape with seamless zoom and rotation controls.
- **Custom Tile Sets**: Enhanced visual details using custom-designed tiles.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Performance**: Built with Nuxt 3 for efficient rendering and quick load times.

## Motivation

The project was initiated to fill the gap left by Google Maps' removal of certain 3D functionalities. It provides users with an alternative platform to view and interact with 3D maps without unnecessary complexity.

## Technologies Used

- [Nuxt 3](https://v3.nuxtjs.org/) - A progressive Vue.js framework for building modern web applications.
- [Mapbox API](https://www.mapbox.com/) - A powerful tool for integrating custom maps and spatial data into web applications.
- **Custom Tile Sets** - Developed to enhance map aesthetics and detail.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/rogadev/map.git
   ```
2. **Navigate to the project directory**

   ```bash
   cd map
   ```

3. **Install deps**

   ```bash
   pnpm install
   ```

4. **Configure Mapbox access token**

The application requires a Mapbox access token to function properly. Follow these steps to set it up:

- Obtain a Mapbox access token: If you don't have one, sign up for a free account at Mapbox to get your token.
- Create a `.env` file: Copy `.env.example` to `.env` in the root directory of the project.
- Add your token to the `.env` file:

```env
MAPBOX_ACCESS_TOKEN=your_mapbox_access_token_here
```

Note: Replace "your_mapbox_access_token_here" with your actual Mapbox access token.

5. **Run the dev server**

   ```bash
   pnpm dev
   ```

6. **Open browser**
   
7. **Visit [http://localhost:3000](http://localhost:3000) to view the application.**
