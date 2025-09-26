# Component Structure Documentation

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Navigation bar component
│   ├── HeroSection.tsx         # Main hero banner
│   ├── ServicesSection.tsx     # Services grid section
│   ├── ContactSection.tsx      # Contact form
│   ├── Footer.tsx              # Footer component
│   ├── MainContent.tsx         # Main layout component
│   └── index.ts                # Component exports
└── styles/
    ├── headerStyles.ts         # Header component styles
    ├── heroStyles.ts           # Hero section styles
    ├── servicesStyles.ts       # Services section styles
    ├── contactStyles.ts        # Contact form styles
    ├── footerStyles.ts         # Footer styles
    ├── globalStyles.ts         # Shared/global styles
    └── index.ts                # Style exports
```

## 🧱 Component Breakdown

### Header Component
- **File**: `src/components/Header.tsx`
- **Styles**: `src/styles/headerStyles.ts`
- **Purpose**: Navigation bar with brand logo and CTA button
- **Features**: Fixed positioning on web, responsive design

### HeroSection Component
- **File**: `src/components/HeroSection.tsx`
- **Styles**: `src/styles/heroStyles.ts`
- **Purpose**: Main landing section with title, subtitle, and action buttons
- **Features**: Responsive typography, gradient background, call-to-action buttons

### ServicesSection Component
- **File**: `src/components/ServicesSection.tsx`
- **Styles**: `src/styles/servicesStyles.ts`
- **Purpose**: Display services in a grid layout
- **Features**: Service cards with icons, hover effects, responsive grid

### ContactSection Component
- **File**: `src/components/ContactSection.tsx`
- **Styles**: `src/styles/contactStyles.ts`
- **Purpose**: Contact form with validation
- **Features**: Form validation, error handling, responsive inputs

### Footer Component
- **File**: `src/components/Footer.tsx`
- **Styles**: `src/styles/footerStyles.ts`
- **Purpose**: Site footer with copyright information
- **Features**: Dark theme, centered content

### MainContent Component
- **File**: `src/components/MainContent.tsx`
- **Purpose**: Main layout component that combines all sections
- **Features**: ScrollView wrapper, imports all components

## 🎨 Style Organization

### Individual Style Files
Each component has its own style file with component-specific styles:
- Keeps styles organized and maintainable
- Easy to find and modify component-specific styles
- Prevents style conflicts

### Global Styles
- **File**: `src/styles/globalStyles.ts`
- **Purpose**: Shared styles used across multiple components
- **Includes**: Common text styles, button styles, layout utilities

## 🔧 Usage Examples

### Using Individual Components
```tsx
import { Header, HeroSection, ServicesSection } from '../components';

// Or import individually
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
```

### Using Styles
```tsx
import { headerStyles } from '../styles/headerStyles';
// Or from index
import { headerStyles, globalStyles } from '../styles';
```

### Custom Component Creation
To create a new component:

1. Create component file in `src/components/`
2. Create corresponding style file in `src/styles/`
3. Add exports to respective index files
4. Follow the existing patterns for consistency

## 🔄 Benefits of This Structure

1. **Modularity**: Each component is self-contained and reusable
2. **Maintainability**: Easy to find and modify specific components/styles
3. **Scalability**: Easy to add new components or modify existing ones
4. **Code Organization**: Clear separation of concerns
5. **Reusability**: Components can be easily reused or extended
6. **Team Collaboration**: Multiple developers can work on different components
7. **Testing**: Components can be tested individually

## 🚀 Development Workflow

1. **Modify Individual Components**: Edit specific component files
2. **Update Styles**: Modify corresponding style files
3. **Add New Features**: Create new components following the established pattern
4. **Maintain Consistency**: Use global styles for common elements

This modular structure makes the codebase more professional, maintainable, and scalable for future development.