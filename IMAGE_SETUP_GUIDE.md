# Image Assets Setup Guide

## 📁 Required Images for Hero Section

To complete the hero section setup, you need to add the following images to the `assets` folder:

### 1. Background Image
- **File**: `backdrop.png`
- **Purpose**: Background for the entire hero section
- **Recommended size**: 1920x1080px (Full HD)
- **Format**: PNG or JPG
- **Style**: Should be suitable for overlay text (darker/muted tones work best)

### 2. Our Pledge Image
- **File**: `OurPledge.png`
- **Purpose**: Illustration for the company pledge section
- **Recommended size**: 800x600px
- **Format**: PNG (with transparency if needed)
- **Content**: Visual representation of company values/pledge

### 3. Carousel Images (What we do section)
- **File 1**: `cr1.png` - Digital Transformation
- **File 2**: `cr2.png` - Enterprise Solutions  
- **File 3**: `cr3.png` - Process Excellence
- **File 4**: `cr4.png` - Innovation Strategy
- **Recommended size**: 400x300px each
- **Format**: PNG or JPG
- **Style**: Professional, consistent styling across all 4 images

## 🔧 Implementation Steps

### Step 1: Add Images to Assets Folder
Place all images in: `d:\Clone\asendus-expo-web\assets\`

### Step 2: Update Component (when images are ready)
Replace the placeholder sections in `HeroSection.tsx`:

#### For Background Image:
```tsx
// Replace this:
<View style={[heroStyles.hero, { backgroundColor: '#1a1a2e' }]}>

// With this:
<ImageBackground
  source={require('../../assets/backdrop.png')}
  style={heroStyles.hero}
  resizeMode="cover"
>
```

#### For Our Pledge Image:
```tsx
// Replace this:
<View style={heroStyles.pledgeImagePlaceholder}>
  <Text style={heroStyles.placeholderText}>🤝</Text>
  <Text style={heroStyles.placeholderLabel}>Our Pledge</Text>
  <Text style={heroStyles.placeholderSubtext}>
    Replace with assets/OurPledge.png
  </Text>
</View>

// With this:
<Image 
  source={require('../../assets/OurPledge.png')}
  style={heroStyles.pledgeImage}
  resizeMode="contain"
/>
```

#### For Carousel Images:
```tsx
// Update the carouselItems array:
const carouselItems = [
  { id: 'cr1', title: 'Digital Transformation', image: require('../../assets/cr1.png') },
  { id: 'cr2', title: 'Enterprise Solutions', image: require('../../assets/cr2.png') },
  { id: 'cr3', title: 'Process Excellence', image: require('../../assets/cr3.png') },
  { id: 'cr4', title: 'Innovation Strategy', image: require('../../assets/cr4.png') },
];

// Replace placeholder with:
<Image 
  source={carouselItems[activeCarousel].image}
  style={heroStyles.carouselImage}
  resizeMode="cover"
/>
```

## 🎨 Design Guidelines

### Color Scheme Compatibility
- Primary: #0d6efd (Blue)
- Background overlay: rgba(0, 0, 0, 0.3)
- Text on overlay: White/Light colors
- Card backgrounds: rgba(255, 255, 255, 0.95)

### Image Optimization
- Compress images for web performance
- Use appropriate formats (PNG for graphics with transparency, JPG for photos)
- Consider responsive design - images should look good on mobile and desktop

## 🚀 Current Status
✅ Component structure is complete  
✅ Styling is implemented  
✅ Placeholder content is showing  
⏳ **Waiting for actual images to be added**

The hero section will work perfectly once you add the required images to the assets folder!