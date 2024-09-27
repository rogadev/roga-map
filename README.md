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
   cd simple-mapbox-3d-map
   ```

3. **Install deps**

   ```bash
   npm i
   ```

4. **Configure Mapbox API Key**

The application requires a Mapbox API key to function properly. Follow these steps to set it up:

- Obtain a Mapbox API Key: If you don't have one, sign up for a free account at Mapbox to get your API key.
- Create a .env File: In the root directory of the project, create a file named .env.
- Add Your API Key to the .env File:

```env
env
```

```env
MAPBOX_API_KEY=your_mapbox_api_key_here
```

Note: Replace "your_mapbox_api_key_here" with your actual Mapbox API key.

5. **Run the dev server**

   ```bash
   npm run dev
   ```

6. **Open browser**
   
7. **Visit [http://localhost:3000](http://localhost:3000) to view the application.**
