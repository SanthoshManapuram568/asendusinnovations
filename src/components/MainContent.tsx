import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import Header from './Header';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const MainContent: React.FC = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const heroRef = useRef<View>(null);
  const servicesRef = useRef<View>(null);
  const contactRef = useRef<View>(null);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const SERVICES_THRESHOLD = 400; // Show button after scrolling past services section (reduced threshold)

  // Web-specific scroll listener
  useEffect(() => {
    if (Platform.OS === 'web') {
      const handleWebScroll = () => {
        const currentScrollY = window.scrollY || window.pageYOffset;
        const shouldShow = currentScrollY > SERVICES_THRESHOLD;
        console.log('🌐 Web scroll position:', currentScrollY, 'Show button:', shouldShow);
        setShowScrollToTop(shouldShow);
      };

      window.addEventListener('scroll', handleWebScroll);
      return () => window.removeEventListener('scroll', handleWebScroll);
    }
  }, []);

  const handleNavigation = (section: string) => {
    console.log('🚀 Navigation called for:', section);
    
    if (Platform.OS === 'web') {
      // Use native web scrolling for better reliability
      console.log('📱 Using web native scrolling');
      try {
        let targetElement;
        switch (section) {
          case 'home':
            targetElement = document.getElementById('hero-section');
            break;
          case 'services':
            targetElement = document.getElementById('services-section');
            break;
          case 'contact':
            targetElement = document.getElementById('contact-section');
            break;
        }
        
        if (targetElement) {
          console.log('✅ Found target element, scrolling...');
          targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        } else {
          console.log('❌ Target element not found, trying fallback');
          // Fallback to window scroll
          const positions = { home: 0, services: 800, contact: 1600 };
          window.scrollTo({ 
            top: positions[section as keyof typeof positions] || 0, 
            behavior: 'smooth' 
          });
        }
      } catch (error) {
        console.log('❌ Web scroll error:', error);
      }
    } else {
      // React Native mobile scrolling
      console.log('📱 Using React Native scrolling');
      const positions = { home: 0, services: 800, contact: 1600 };
      scrollViewRef.current?.scrollTo({ 
        y: positions[section as keyof typeof positions] || 0, 
        animated: true 
      });
    }
  };

  const handleScroll = (event: any) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    setScrollY(currentScrollY);
    
    // Show scroll-to-top button when scrolled past threshold
    const shouldShow = currentScrollY > SERVICES_THRESHOLD;
    console.log('📊 Scroll position:', currentScrollY, 'Threshold:', SERVICES_THRESHOLD, 'Show button:', shouldShow);
    setShowScrollToTop(shouldShow);
  };

  const scrollToTop = () => {
    if (Platform.OS === 'web') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView 
        ref={scrollViewRef}
        style={globalStyles.container} 
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Header onNavigate={handleNavigation} />
        <View ref={heroRef} nativeID="hero-section" {...(Platform.OS === 'web' && { id: 'hero-section' })}>
          <HeroSection />
        </View>
        <View ref={servicesRef} nativeID="services-section" {...(Platform.OS === 'web' && { id: 'services-section' })}>
          <ServicesSection />
        </View>
        <View ref={contactRef} nativeID="contact-section" {...(Platform.OS === 'web' && { id: 'contact-section' })}>
          <ContactSection />
        </View>
        <Footer />
      </ScrollView>
      
      {/* Scroll to Top Button - Fixed position outside ScrollView */}
      {showScrollToTop && (
        <TouchableOpacity 
          style={scrollToTopStyles.scrollToTopButton}
          onPress={scrollToTop}
          activeOpacity={0.8}
        >
          <Text style={scrollToTopStyles.scrollToTopIcon}>⬆️</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// Scroll to top button styles
const scrollToTopStyles = StyleSheet.create({
  scrollToTopButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0d6efd',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 1000,
    ...(Platform.OS === 'web' && {
      position: 'fixed' as any, // Use fixed positioning for web to stick to viewport
    }),
  },
  scrollToTopIcon: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default MainContent;