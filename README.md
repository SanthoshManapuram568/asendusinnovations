# Asendus Innovations - Expo Web Project

This is a React Expo web application based on the original HTML design, optimized for deployment on Netlify.

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run web
```

3. Open [http://localhost:19006](http://localhost:19006) to view it in the browser.

### Building for Production

To build the project for production:

```bash
npm run build
```

This will create a `web-build` directory with the production build.

### Deployment to Netlify

#### Option 1: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=web-build
```

#### Option 2: Git Integration
1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `web-build`
5. Deploy

## Project Structure

```
asendus-expo-web/
├── src/
│   └── components/
│       └── MainContent.tsx    # Main application component
├── assets/                    # Static assets
├── App.tsx                   # Root component
├── app.json                  # Expo configuration
├── package.json              # Dependencies and scripts
├── netlify.toml             # Netlify configuration
└── README.md                # This file
```

## Features

- 📱 Responsive design that works on all devices
- ⚡ Fast performance with Expo Web
- 🎨 Modern UI components converted from Bootstrap design
- 📝 Contact form with validation
- 🚀 Optimized for Netlify deployment

## Technologies Used

- React Native Web
- Expo
- TypeScript
- React Hooks

## Original Design

This project is based on the Asendus Innovations HTML template, converted to a modern React Expo web application while maintaining the original design and functionality.