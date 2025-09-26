import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  // Common text styles
  headingLarge: {
    fontSize: 32,
    fontWeight: '700',
    color: '#212529',
  },
  headingMedium: {
    fontSize: 24,
    fontWeight: '600',
    color: '#212529',
  },
  headingSmall: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
  },
  bodyText: {
    fontSize: 16,
    color: '#6c757d',
    lineHeight: 24,
  },
  smallText: {
    fontSize: 14,
    color: '#6c757d',
  },
  // Common button styles
  primaryButton: {
    backgroundColor: '#0d6efd',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#0d6efd',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#6c757d',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#6c757d',
    fontWeight: '600',
    fontSize: 16,
  },
  // Common layout styles
  section: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  sectionCentered: {
    alignItems: 'center',
    textAlign: 'center',
  },
  maxWidthContainer: {
    maxWidth: 1200,
    width: '100%',
  },
});