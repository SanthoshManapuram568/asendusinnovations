import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, Dimensions } from 'react-native';
import { headerStyles } from '../styles/headerStyles';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { width } = Dimensions.get('window');
  const isMobile = width < 768; // Mobile breakpoint

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(section);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderNavItems = () => (
    <>
      <TouchableOpacity 
        style={[headerStyles.navItem, activeSection === 'home' && headerStyles.navItemActive]}
        onPress={() => handleNavigation('home')}
      >
        <Text style={[headerStyles.navText, activeSection === 'home' && headerStyles.navTextActive]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[headerStyles.navItem, activeSection === 'services' && headerStyles.navItemActive]}
        onPress={() => handleNavigation('services')}
      >
        <Text style={[headerStyles.navText, activeSection === 'services' && headerStyles.navTextActive]}>Services</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[headerStyles.navItem, activeSection === 'contact' && headerStyles.navItemActive]}
        onPress={() => handleNavigation('contact')}
      >
        <Text style={[headerStyles.navText, activeSection === 'contact' && headerStyles.navTextActive]}>Contact</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={headerStyles.navbar}>
      <View style={headerStyles.navContent}>
        {/* Logo and Brand Name */}
        <View style={headerStyles.logoAndBrandContainer}>
          <Image 
            source={require('../../assets/logo.png')}
            style={headerStyles.logo}
            resizeMode="contain"
          />
          <Text style={headerStyles.brandText}>ASENDUS INNOVATIONS</Text>
        </View>

        {/* Spacer */}
        <View style={headerStyles.spacer} />

        {/* Desktop Navigation */}
        {!isMobile && (
          <View style={headerStyles.desktopNav}>
            {renderNavItems()}
          </View>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <TouchableOpacity 
            style={headerStyles.hamburgerButton}
            onPress={toggleMobileMenu}
          >
            <View style={headerStyles.hamburgerLine} />
            <View style={headerStyles.hamburgerLine} />
            <View style={headerStyles.hamburgerLine} />
          </TouchableOpacity>
        )}
      </View>

      {/* Mobile Menu Dropdown */}
      {isMobile && isMobileMenuOpen && (
        <View style={headerStyles.mobileMenu}>
          {renderNavItems()}
        </View>
      )}
    </View>
  );
};

export default Header;