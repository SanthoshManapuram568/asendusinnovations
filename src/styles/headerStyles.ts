import { StyleSheet, Platform, Dimensions } from 'react-native';

const isWeb = Platform.OS === 'web';
const { width } = Dimensions.get('window');
const isMobile = width < 768;

export const headerStyles = StyleSheet.create({
  navbar: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    ...(isWeb && {
      position: 'fixed' as any,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
    }),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  navContent: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 1200,
    width: '100%',
    ...(isWeb && { marginHorizontal: 'auto' as any }),
  },
  // Logo styles
  logoContainer: {
    minWidth: 60,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0d6efd',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0d6efd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  logoText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800',
  },
  // Logo and brand name container
  logoAndBrandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  spacer: {
    flex: 1,
  },
  brandText: {
    fontSize: isMobile ? 16 : 22,
    fontWeight: '700',
    color: '#0d6efd',
    letterSpacing: 0.5,
    marginLeft: 12,
    textAlign: 'left',
  },
  // Desktop navigation
  desktopNav: {
    minWidth: 300,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
  },
  navItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  navItemActive: {
    backgroundColor: 'rgba(13, 110, 253, 0.1)',
  },
  navText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#495057',
  },
  navTextActive: {
    color: '#0d6efd',
    fontWeight: '600',
  },
  // Mobile hamburger menu
  hamburgerButton: {
    minWidth: 60,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 8,
  },
  hamburgerLine: {
    width: 24,
    height: 3,
    backgroundColor: '#0d6efd',
    marginVertical: 2,
    borderRadius: 2,
  },
  // Mobile dropdown menu
  mobileMenu: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    paddingVertical: 16,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  // Legacy styles for backward compatibility
  ctaButton: {
    backgroundColor: '#0d6efd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: '#0d6efd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  ctaButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
});