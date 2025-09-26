import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MainContent from './src/components/MainContent';
import LoadingSpinner from './src/components/LoadingSpinner';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  
  // List of all images that need to be preloaded
  const imagesToPreload = [
    require('./assets/logo.png'),
    require('./assets/OurPledge.png'),
    require('./assets/cr1.png'),
    require('./assets/cr2.png'),
    require('./assets/cr3.png'),
    require('./assets/cr4.png'),
  ];

  useEffect(() => {
    let mounted = true;
    
    const preloadImages = async () => {
      try {
        if (Platform.OS === 'web') {
          // Load CSS for animations
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = '/loading.css';
          document.head.appendChild(link);
          
          // Web image preloading
          const imagePromises = imagesToPreload.map((imageSource, index) => {
            return new Promise((resolve) => {
              const img = new Image();
              const timeout = setTimeout(() => {
                if (mounted) setImagesLoaded(prev => prev + 1);
                resolve(imageSource);
              }, 500); // Timeout fallback
              
              img.onload = () => {
                clearTimeout(timeout);
                if (mounted) setImagesLoaded(prev => prev + 1);
                resolve(imageSource);
              };
              
              img.onerror = () => {
                clearTimeout(timeout);
                if (mounted) setImagesLoaded(prev => prev + 1);
                resolve(imageSource);
              };
              
              // Handle different image source formats
              try {
                if (typeof imageSource === 'object' && imageSource.default) {
                  img.src = imageSource.default;
                } else if (typeof imageSource === 'string') {
                  img.src = imageSource;
                } else {
                  img.src = imageSource;
                }
              } catch (error) {
                clearTimeout(timeout);
                if (mounted) setImagesLoaded(prev => prev + 1);
                resolve(imageSource);
              }
            });
          });

          // Wait for all images with minimum loading time
          await Promise.all(imagePromises);
          
          // Ensure minimum loading time for smooth UX
          const minLoadTime = 2000; // 2 seconds minimum
          setTimeout(() => {
            if (mounted) {
              setIsLoading(false);
            }
          }, minLoadTime);
          
        } else {
          // React Native - simulate loading
          setTimeout(() => {
            if (mounted) {
              setIsLoading(false);
            }
          }, 2500);
        }
      } catch (error) {
        console.log('Loading error:', error);
        // Fallback - show content even if preloading fails
        setTimeout(() => {
          if (mounted) {
            setIsLoading(false);
          }
        }, 3000);
      }
    };

    preloadImages();
    
    return () => {
      mounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <LoadingSpinner />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainContent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});