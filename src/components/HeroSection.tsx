import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView, Platform } from 'react-native';
import { heroStyles } from '../styles/heroStyles';

const isWeb = Platform.OS === 'web';

const HeroSection: React.FC = () => {
  const [activeCarousel, setActiveCarousel] = useState(0);

  // Auto-scroll carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarousel((prev) => (prev + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  const carouselItems = [
    { id: 'cr1', title: 'Digital Transformation', image: require('../../assets/cr1.png') },
    { id: 'cr2', title: 'Enterprise Solutions', image: require('../../assets/cr2.png') },
    { id: 'cr3', title: 'Process Excellence', image: require('../../assets/cr3.png') },
    { id: 'cr4', title: 'Innovation Strategy', image: require('../../assets/cr4.png') },
  ];

  const nextSlide = () => {
    setActiveCarousel((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setActiveCarousel((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <View style={[heroStyles.hero, { backgroundColor: '#ffffff' }]}>
      <View style={heroStyles.overlay}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={heroStyles.heroContent}>
            
            {/* Foreword Section */}
            <View style={heroStyles.sectionContent}>
              <Text style={heroStyles.sideHeading}>Foreword</Text>
              <Text style={heroStyles.contentText}>
                The next five years promise to be even more disruptive than the past decade, making Digital Transformation (DX) indispensable. Visionary companies will seize new strategic opportunities. Come, join Asendus Innovations in building a future-ready DX ecosystem🤝
              </Text>
            </View>

            {/* Who are we Section */}
            <View style={heroStyles.sectionContent}>
              <Text style={heroStyles.sideHeading}>Who are we</Text>
              <Text style={heroStyles.contentText}>
                Founded in 2025, Asendus Innovations LLP believes transformations isn't just about systems - it's about people, purpose and progress.
              </Text>
              <Text style={heroStyles.contentText}>
                By positioning ourselves as a trusted partner in enterprise management, we help organizations to navigate their unique DX journeys with empathy, process excellence and ERP Solutions that are customized, tailored and easily adaptable.
              </Text>
              <Text style={heroStyles.contentText}>
                Whether you are scaling, simplifying or starting fresh, we are here to support you in building with clarity and confidence.
              </Text>
            </View>

            {/* Our Pledge Image Section */}
            <View style={heroStyles.imageSectionContent}>
              <Image 
                source={require('../../assets/OurPledge.png')}
                style={heroStyles.pledgeImage}
                resizeMode="contain"
              />
            </View>

            {/* What we do Section with Carousel */}
            <View style={heroStyles.sectionContent}>
              <Text style={heroStyles.sideHeading}>What we do</Text>
              
              <View style={heroStyles.autoCarouselContainer}>
                {/* Image Section - Always on top */}
                <View style={heroStyles.carouselImageContainer}>
                  <Image 
                    source={carouselItems[activeCarousel].image}
                    style={heroStyles.autoCarouselImage}
                    resizeMode="contain"
                  />
                </View>
                
                {/* Text Section - Always below image */}
                <View style={heroStyles.carouselTextContainer}>
                  <Text style={heroStyles.autoCarouselTitle}>
                    {carouselItems[activeCarousel].title}
                  </Text>
                  <Text style={heroStyles.carouselDescription}>
                    {activeCarousel === 0 && "Transform your business with cutting-edge digital solutions"}
                    {activeCarousel === 1 && "Comprehensive enterprise management and ERP solutions"}
                    {activeCarousel === 2 && "Streamline operations with process excellence methodologies"}
                    {activeCarousel === 3 && "Drive innovation through strategic planning and execution"}
                  </Text>
                </View>
                
                {/* Carousel Indicators - Centered */}
                <View style={heroStyles.carouselDots}>
                  {carouselItems.map((_, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        heroStyles.carouselDot,
                        activeCarousel === index && heroStyles.carouselDotActive
                      ]}
                      onPress={() => setActiveCarousel(index)}
                    />
                  ))}
                </View>
              </View>
            </View>

            {/* Call to Action Buttons
            <View style={heroStyles.heroButtons}>
              <TouchableOpacity style={heroStyles.primaryButton}>
                <Text style={heroStyles.primaryButtonText}>Start Your DX Journey</Text>
              </TouchableOpacity>
              <TouchableOpacity style={heroStyles.secondaryButton}>
                <Text style={heroStyles.secondaryButtonText}>Learn More</Text>
              </TouchableOpacity>
            </View> */}

          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HeroSection;